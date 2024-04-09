import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";
import { BackToTop } from "../../components/BackToTop";
import SideNav from "../../components/SideNav";
import Sponsors from "../../components/Sponsors";

export default function Calendar() {
  const [events, setEvents] = useState([]);

  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const calendarID = "c_jhjemj5afa0ubjucqad23cuuos@group.calendar.google.com";

    useEffect(() => {
        const newEvents = [
        {
            start: new Date("2024-02-12T13:15:00+02:00"),
            end: new Date("2024-02-12T15:00:00+02:00"),
            title: "Testingggg",
            url: "https://www.bing.com",
            description: "Test event description", // assuming each event has a description
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
    }, [events]);

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        <button onClick={() => showMoreInfo(eventInfo.event)}>Show More</button>
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
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventContent={renderEventContent} // custom event rendering
          locale={"sv"}
        />
      </div>
      <div className="wide">
        <Sponsors />
        <BackToTop />
      </div>
    </div>
  );
}
