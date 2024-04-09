import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const calendarID = "c_jhjemj5afa0ubjucqad23cuuos@group.calendar.google.com";

    const timeMin = subtractYears(new Date(), 1).toISOString();

    // Reference: https://developers.google.com/calendar/api/v3/reference/events/list
    const getEvents = (calendarID, apiKey) => {
        async function initiate() {
            await gapi.client.init({ apiKey: apiKey });
            // const response = await gapi.client.request({
            //     path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?maxResults=500&orderBy=updated&timeMin=${timeMin}`,
            // });

            // let events = response.result.items;
            let events = [];
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
            const tt = {
                start: new Date("2024-03-04T13:15:00+02:00"),
                end: new Date("2024-03-04T15:00:00+02:00"),
                title: "Testingggg",
                description: "Hej D-student! Här kommer information om sektionens vintermöte att samlas. Ett sektionsmöte är sektionens högst beslutande organ, och det är sektionsmöten som beslutar om till exempel sektionens budgetering, framtida arbetssätt, stadgar, reglemente, med mera. För mer information om hur ett sektionsmöte fungerar finns en beskrivning av relevanta termer och processer på d-sektionen.se/sektionsmote Observera att mycket information kommer läggas till under de kommande veckorna, så denna sida kommer att uppdateras kontinuerligt. Styrelsen kommer bjuda på pizza i samband med sektionsmötet, länk för anmälan: https://forms.gle/zhwdJDGGrRGXr5oo7. Deadline för anmälan är 24 januari 2024.",
            };
            newEvents.push(tt)
            setEvents(newEvents);
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
                    <p className="desc" onClick={e => e.target.classList.toggle('expanded')}>{eventInfo.event.extendedProps.description}</p>
                </div>
            </>
        );
    }

    function EventModal({ event, onClose }) {
        return (
            <div className="modal">
                <div className="modal-content">
                    <h2>{event.title}</h2>
                    <p>{event.extendedProps.description}</p>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
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
                    eventClick={info => {
                        setSelectedEvent(info.event);
                        setIsModalOpen(true);
                    }}
                />
                {isModalOpen && (
                    <EventModal
                        event={selectedEvent}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
            <div className="wide">
                <Sponsors />
                <BackToTop />
            </div>
        </div>
    );
}
