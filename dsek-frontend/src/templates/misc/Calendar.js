import { gapi } from "gapi-script";
import React, { useState } from "react";
import { BackToTop } from "../../components/BackToTop";
import Event from "../../components/Event.js";
import SideNav from "../../components/SideNav";
import Sponsors from "../../components/Sponsors";

export default function Calendar() {

    const [events, setEvents] = useState([]);

    const calendarID = process.env.REACT_APP_CALENDAR_ID;
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

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
                        return events;
                    },
                    function (err) {
                        return [false, err];
                    }
                );
        }
        gapi.load("client", initiate);

    };

    return (
        <>
            <div className="Home">
                <div className="wide">
                    <SideNav />
                </div>
                <div className="Middle" id="pageContainer">

                    <p>Kalendern bor här</p>

                    <ul>
                        {events?.map((event) => (
                            <li key={event.id} className="flex justify-center">
                                <Event description={event.summary} />
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="wide">
                    < Sponsors />
                    < BackToTop />
                </div>
                < BackToTop />
            </div>
        </>
    );
}

