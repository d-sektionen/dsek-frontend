"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { EventInput, EventSourceFuncArg } from "@fullcalendar/core/index.js";

export function Calendar() {
  async function fetchEvents({
    startStr,
    endStr,
    timeZone,
  }: EventSourceFuncArg): Promise<EventInput[]> {
    const url = new URL("/api/calendar", window.location.origin);
    url.searchParams.set("start", startStr);
    url.searchParams.set("end", endStr);

    return await fetch(url).then((r) => r.json());
  }

  return (
    <div>
      <h1>D-sektionens kalender</h1>

      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          left: "title",
          right: "prevYear,prev,next,nextYear today",
        }}
        events={fetchEvents}
        initialView="dayGridMonth"
      />
    </div>
  );
}
