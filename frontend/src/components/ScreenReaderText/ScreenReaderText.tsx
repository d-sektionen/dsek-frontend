import { ElementType, ReactNode } from "react";
import style from "./ScreenReaderText.module.css";

type ScreenReaderTextProps = {
  as?: ElementType;
  children?: ReactNode;
};

export function ScreenReaderText({
  children,
  as: Component = "p",
}: ScreenReaderTextProps) {
  return (
    <Component tabIndex={-1} className={style.screenReaderText}>
      {children}
    </Component>
  );
}
