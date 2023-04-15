import '../css/Widget.css';
import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import listPlugin from '@fullcalendar/list' // a plugin!

function CalendarWidget(props) {

    const [events, setEvents] = useState([]);

    const today = new Date('2023-04-02T00:00:00'); // todo: remove parameter

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
                            {
                                start: new Date('2023-04-15T13:15:00+02:00'),
                                end: new Date('2023-04-15T15:00:00+02:00'),
                                title: 'Testingggg',
                                url: 'https://www.google.com'
                            }
                        ];
                        for (const e of events) {
                            if (new Date(e.end.date) >= today || new Date(e.end.dateTime) > today) {
                                const t = {
                                    start: e.start.date || e.start.dateTime,
                                    end: e.end.date || e.end.dateTime,
                                    title: e.summary
                                };
                                newEvents.push(t);
                            }
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
        console.log(events)
    }, []);

    return (
        <>
            <div className="CalendarWidget Widget">
                <h1 className="Widget-Title">{props.title}</h1>
                <FullCalendar
                    plugins={[listPlugin]}
                    initialView="listMonth"
                    events={events}
                    headerToolbar={
                        false
                    }
                    locale={'sv'}
                    height={'auto'}
                    noEventsContent={
                        'Det finns inga kommande aktiviteter'
                    }
                    allDayContent={'Heldag'}
                />
            </div>
        </>
    );
}

export default CalendarWidget;