import { CgSpinner } from "react-icons/cg";
import style from "./Spinner.module.css";

type SpinnerProps = {
  size?: number;
  label?: string;
};

export function Spinner({ label, size = 24 }: SpinnerProps) {
  return (
    <div className={style.wrapper}>
      <CgSpinner className={style.spinner} size={size} />
      {label && <span className={style.label}>{label}</span>}
    </div>
  );
}
