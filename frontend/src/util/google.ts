import { calendar_v3, google } from "googleapis";
import dayjs, { Dayjs } from "dayjs";

const calendar = google.calendar({
  version: "v3",
  auth: process.env.GOOGLE_API_KEY!,
});

export async function calendarGetEventsBetween(from?: Dayjs, to?: Dayjs) {
  const options: calendar_v3.Params$Resource$Events$List = {
    calendarId: process.env.GOOGLE_CALENDAR_ID!,
    singleEvents: true,
    orderBy: "startTime",
  };

  if (from != null) {
    options.timeMin = from.toISOString();
  }

  if (to != null) {
    options.timeMax = to.toISOString();
  }

  const resp = await calendar.events.list(options, {});
  return resp?.data?.items ?? [];
}

export async function calendarGetEvent(eventId: string) {
  const resp = await calendar.events.get({
    calendarId: process.env.GOOGLE_CALENDAR_ID!,
    eventId,
  });

  return resp?.data;
}
