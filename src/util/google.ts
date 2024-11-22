import { google } from "googleapis";
import dayjs from "dayjs";

const calendar = google.calendar({
  version: "v3",
  auth: process.env.GOOGLE_API_KEY!,
});

export function calendarGetEvents(calendarId: string) {
  return calendar.events.list({ calendarId, maxResults: 8 }, {});
}
