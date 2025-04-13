import { calendarGetEventsBetween } from "@/util/google";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const start = sp.get("start");
  const end = sp.get("end");

  const events = await calendarGetEventsBetween(
    start ? dayjs(start) : undefined,
    end ? dayjs(end) : undefined,
  );

  return NextResponse.json(
    events.map((event) => ({
      id: event.id,
      title: event.summary,
      start: event.start?.dateTime ?? event.start?.date,
      end: event.end?.dateTime,
      allDay: event.start?.date != null,
    })),
  );
}
