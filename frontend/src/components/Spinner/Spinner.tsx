import { CgSpinner } from "react-icons/cg";
import style from "./Spinner.module.css";

type SpinnerProps = {
  size?: number;
};

export function Spinner({ size = 48 }: SpinnerProps) {
  return <CgSpinner className={style.spinner} size={size} />;
}
