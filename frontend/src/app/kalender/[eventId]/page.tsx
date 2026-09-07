import { PageHeader } from "../../../components/PageHeader/PageHeader";
import dayjs from "../../../util/dayjs";
import { calendarGetEvent } from "../../../util/google";

export default async function CalendarEventPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  const event = await calendarGetEvent(eventId);
  const startDate = dayjs(event.start?.dateTime || event.start?.date);
  const endDate = dayjs(event.end?.dateTime || event.end?.date);
  const hasTime = event.start?.dateTime != null && event.end?.dateTime != null;
  const publishDate = dayjs(event.created);
  const isMultiday = !endDate.isSame(startDate, "day");

  return (
    <div>
      <PageHeader
        title={event.summary ?? "Namnlöst evenemang"}
        publishDate={publishDate}
        event={{
          start: startDate,
          end: isMultiday ? endDate : undefined,
          hasTime,
        }}
      />

      <p>{event.description}</p>
    </div>
  );
}
