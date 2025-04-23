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
  const startDate = dayjs(event.start?.dateTime);
  const endDate = dayjs(event.end?.dateTime);
  const publishDate = dayjs(event.created);
  const isMultiday = endDate.day() !== startDate.day();

  return (
    <div>
      <PageHeader
        title={event.summary ?? "Namnlöst evenemang"}
        publishDate={publishDate}
        event={{
          start: startDate,
          end: isMultiday ? endDate : undefined,
        }}
      />

      <p>{event.description}</p>
    </div>
  );
}
