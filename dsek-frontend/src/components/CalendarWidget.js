import '../css/Widget.css';
import WidgetElement from './WidgetElement';
import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import listPlugin from '@fullcalendar/list' // a plugin!

// "Det finns inga kommande aktiviteter" om inga hittas
function CalendarWidget(props) {

    const [events, setEvents] = useState([]);

    const apiKey = "AIzaSyCTPkWAUGaoz5TbDDCmhyOHp9r97maEwmc";
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
                            {
                                start: new Date('2023-04-01T13:15:00+02:00'),
                                end: new Date('2023-04-01T15:00:00+02:00'),
                                title: 'Testingggg'
                            }
                        ];
                        for (const e of events) {
                            const t = {
                                start: e.start.date || e.start.dateTime,
                                end: e.end.date || e.end.dateTime,
                                title: e.summary,
                                url: 'https://www.google.com'
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
        const events = getEvents(calendarID, apiKey);
    }, []);

    return (
        <>
            <div className="Widget">
                <h1 className="Widget-Title">{props.title}</h1>
                <FullCalendar
                    plugins={[listPlugin]}
                    initialView="listMonth"
                    events={events}
                    headerToolbar={
                        false
                    }
                    locale={'sv'}
                />
            </div>
        </>
    );
}

export default CalendarWidget;