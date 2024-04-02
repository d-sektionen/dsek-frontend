
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";
import { BackToTop } from "../../components/BackToTop";
import SideNav from "../../components/SideNav";
import Sponsors from "../../components/Sponsors";



export default function Calendar() {
    const [events, setEvents] = useState([]);

    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const calendarID = "c_jhjemj5afa0ubjucqad23cuuos@group.calendar.google.com";

    const getEvents = (calendarID, apiKey) => {
        function initiate() {
            gapi.client
                .init({
                    apiKey: apiKey,
                })
                .then(function () {
                    return gapi.client.request({
                        path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
                    });
                })
                .then(
                    (response) => {
                        let events = response.result.items;

                        const newEvents = [

                        ];
                        for (const e of events) {
                            const t = {
                                start: e.start.date || e.start.dateTime,
                                end: e.end.date || e.end.dateTime,
                                title: e.summary
                            };
                            console.log(t);
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
        getEvents(calendarID, apiKey);
    }, []);

    return (
        <div className="Home">
            <div className="wide">
                <SideNav />
            </div>
            <div className="Middle FullPageCalendar">
                <p style={{ textAlign: 'right' }}><a href="https://calendar.google.com/calendar/embed?src=c_jhjemj5afa0ubjucqad23cuuos%40group.calendar.google.com&ctz=Europe%2FStockholm">Prenumerera genom Google Kalender</a></p>
                <p style={{ textAlign: 'right' }}><a href="http://kalender.d-sektionen.se/">Prenumerera med denna ics-länk (kopiera)</a></p>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={events}
                    locale={'sv'}
                />
            </div >
            <div className="wide">
                < Sponsors />
                {/* < BackToTop /> */}
            </div>
        </div >
    );
}