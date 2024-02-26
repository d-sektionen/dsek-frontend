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

export default function Calendar() {
  const [events, setEvents] = useState([]);

  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const calendarID = "c_jhjemj5afa0ubjucqad23cuuos@group.calendar.google.com";
  useEffect(() => {
    const newEvents = [
      {
        start: new Date("2024-02-12T13:15:00+02:00"),
        end: new Date("2024-02-12T15:00:00+02:00"),
        title: "Webbu",
        description: "Test event description", // assuming each event has a description
      },

      {
        start: new Date("2024-02-12T10:15:00+02:00"),
        end: new Date("2024-02-13T12:00:00+02:00"),
        title: "Webbu ",
      },
      
    ];
    for (const e of events) {
      const t = {
      start: e.start.date || e.start.dateTime,
      end: e.end.date || e.end.dateTime,
      title: e.summary,
      description: e.description || "ingen beskrivning tillgänglig",
      };
     console.log(t, "ishere");
     newEvents.push(t);
    }
    setEvents(newEvents);
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
