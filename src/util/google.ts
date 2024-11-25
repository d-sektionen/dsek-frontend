import { google } from "googleapis";
import dayjs, { Dayjs } from "dayjs";

const calendar = google.calendar({
  version: "v3",
  auth: process.env.GOOGLE_API_KEY!,
});

export async function calendarGetFutureEvents() {
  const resp = await calendar.events.list(
    {
      calendarId: process.env.GOOGLE_CALENDAR_ID!,
      singleEvents: true,
      orderBy: "startTime",
      timeMin: dayjs("2011").toISOString(),
    },
    {},
  );

  return resp?.data?.items ?? [];
}

export async function calendarGetEvent(eventId: string) {
  const resp = await calendar.events.get({
    calendarId: process.env.GOOGLE_CALENDAR_ID!,
    eventId,
  });

  return resp?.data;
}
