import { google } from "googleapis";
import dayjs, { Dayjs } from "dayjs";

const calendar = google.calendar({
  version: "v3",
  auth: process.env.GOOGLE_API_KEY!,
});

export async function calendarGetFutureEvents(calendarId: string) {
  const resp = await calendar.events.list(
    {
      calendarId,
      singleEvents: true,
      orderBy: "startTime",
      timeMin: dayjs("2011").toISOString(),
    },
    {},
  );

  return resp?.data?.items ?? [];
}
