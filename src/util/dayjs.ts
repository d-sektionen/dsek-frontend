import sv from "dayjs/locale/sv";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";

dayjs.locale(sv);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export default dayjs;
