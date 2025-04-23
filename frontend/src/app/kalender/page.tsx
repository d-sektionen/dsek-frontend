import { Calendar } from "../../components/Calendar/Calendar";
import { calendarGetEventsBetween } from "../../util/google";
import dayjs from "dayjs";

export default async function KalenderPage() {
  const events = await calendarGetEventsBetween(
    dayjs().subtract(1, "year"),
    dayjs().add(1, "year"),
  );

  return (
    <div>
      <Calendar />
    </div>
  );
}
