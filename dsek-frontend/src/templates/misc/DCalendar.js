import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";
import { BackToTop } from "../../components/BackToTop";
import Event from "../../components/Event.js";
import SideNav from "../../components/SideNav";
import Sponsors from "../../components/Sponsors";
import { Calendar, globalizeLocalizer } from 'react-big-calendar';
import globalize from 'globalize';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = globalizeLocalizer(globalize)

export default function DCalendar () {

    const [events, setEvents] = useState([]);
 
    const apiKey = "";
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
                console.log(events);

                const newEvents = [];
                for (const e of events)  {
                  console.log(e);
                  const t = {
                    start: e.start.date || e.start.dateTime,
                    end: e.end.date || e.end.dateTime,
                    title: e.summary
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
        <div className="Home">
          <div className="wide">
            <SideNav />
          </div>
          <div className="Middle">
            <p><a href="https://calendar.google.com/calendar/embed?src=c_jhjemj5afa0ubjucqad23cuuos%40group.calendar.google.com&ctz=Europe%2FStockholm">Prenumerera genom Google Calendar</a></p>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </div>
          <div className="wide">
            < Sponsors />
            < BackToTop />
          </div>
        </div>
      );
    }