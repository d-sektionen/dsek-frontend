"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  EventClickArg,
  EventInput,
  EventSourceFuncArg,
} from "@fullcalendar/core/index.js";
import { PageHeader } from "../PageHeader/PageHeader";
import { useRouter } from "next/navigation";

export function Calendar() {
  const router = useRouter();

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

  function handleClick({ event }: EventClickArg) {
    console.log(event);
    router.push(`/kalender/${event._def.publicId}`);
  }

  return (
    <div>
      <PageHeader title="D-Sektionens kalender" />

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "title",
          right: "prevYear,prev,next,nextYear today",
        }}
        selectable
        eventClick={handleClick}
        events={fetchEvents}
        initialView="dayGridMonth"
      />
    </div>
  );
}
