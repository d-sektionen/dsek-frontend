import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import timelinePlugin from "@fullcalendar/timeline";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";
import { BackToTop } from "../../components/BackToTop";
import SideNav from "../../components/SideNav";
import Sponsors from "../../components/Sponsors";
import "../../css/calendar.css";

function subtractYears(date, years) {
  // make copy with "Date" constructor
  const dateCopy = new Date(date);

  dateCopy.setFullYear(date.getFullYear() - years);
  dateCopy.setMonth(0);
  dateCopy.setDate(1);
  dateCopy.setHours(0, 0, 0, 0);

  return dateCopy;
}

export default function Calendar() {
  const [events, setEvents] = useState([]);

  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const calendarID = "c_jhjemj5afa0ubjucqad23cuuos@group.calendar.google.com";

  const timeMin = subtractYears(new Date(), 1).toISOString();

  // Reference: https://developers.google.com/calendar/api/v3/reference/events/list
  const getEvents = (calendarID, apiKey) => {
      function initiate() {
          gapi.client
              .init({
                  apiKey: apiKey,
              })
              .then(function () {
                  return gapi.client.request({
                      path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?maxResults=500&orderBy=updated&timeMin=${timeMin}`,
                  });
              })
              .then(
                  (response) => {
                      let events = response.result.items;
                      const newEvents = [];
                      for (const e of events) {
                        const t = {
                          start: e.start.date || e.start.dateTime,
                          end: e.end.date || e.end.dateTime,
                          title: e.summary,
                          description: e.description || "ingen beskrivning tillgänglig",
                        };
                        newEvents.push(t);
                      }
                      setEvents(newEvents);
                  },
                  function (err) {
                      return [false, err];
                  }
              );
      }
      gapi.load("client", initiate);
  };

  useEffect(() => {
    // Load the Google Calendar API & set the events
    getEvents(calendarID, apiKey);
  }, []);

  function renderEventContent(eventInfo) {
    return (
      <>
        <div className="eventbox">
          <i className="title">{eventInfo.event.title}</i>
          <b className="info">{eventInfo.timeText}</b>
          <p className="desc">{eventInfo.event.extendedProps.description}</p>
        </div>
      </>
    );
  }

  function showMoreInfo(event) {
    alert(`More info about ${event.title}: ${event.extendedProps.description}`);
  }

  return (
    <div className="Home">
      <div className="wide">
        <SideNav />
      </div>
      <div className="Middle FullPageCalendar">
        <p style={{ textAlign: "right" }}>
          <a href="https://calendar.google.com/calendar/embed?src=c_jhjemj5afa0ubjucqad23cuuos%40group.calendar.google.com&ctz=Europe%2FStockholm">
            Prenumerera genom Google Kalender
          </a>
        </p>
        <p style={{ textAlign: "right" }}>
          <a href="http://kalender.d-sektionen.se/">
            Prenumerera med denna ics-länk (kopiera)
          </a>
        </p>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventContent={renderEventContent} // custom event rendering
          locale={"sv"}
          eventClick={info =>{
            alert('Clicked on: ' + info.event.title);
          }}
        />
      </div>
      <div className="wide">
        <Sponsors />
        <BackToTop />
      </div>
    </div>
  );
}
