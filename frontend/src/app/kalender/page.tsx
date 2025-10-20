import { Calendar } from "../../components/Calendar/Calendar";
import { calendarGetEventsBetween } from "../../util/google";
import dayjs from "dayjs";

export default async function KalenderPage() {
  return (
    <div>
      <Calendar />
    </div>
  );
}
