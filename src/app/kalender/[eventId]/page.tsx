import dayjs from "@/util/dayjs";
import { calendarGetEvent } from "@/util/google";

export default async function CalendarEventPage({
  params: { eventId },
}: {
  params: { eventId: string };
}) {
  const event = await calendarGetEvent(eventId);
  const startDate = dayjs(event.start?.dateTime);
  const endDate = dayjs(event.end?.dateTime);
  const isMultiday = endDate.day() !== startDate.day();

  return (
    <div>
      <h1>{event.summary}</h1>
      <p>Start: {startDate.format("LLLL")}</p>
      {isMultiday ? <p>Slut: {endDate.format("LLLL")}</p> : null}
      <p>{event.description}</p>
    </div>
  );
}
