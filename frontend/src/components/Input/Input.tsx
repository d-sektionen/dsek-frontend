import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import style from "./Input.module.css";

type InputProps = InputHTMLAttributes<never> & {
  name: string;
  label?: string;
  icon?: IconType;
  leadingIcon?: IconType;
  trailingIcon?: IconType;
};

export function Input({
  label,
  icon,
  type = "text",
  name,
  leadingIcon: LeadingIcon = icon,
  trailingIcon: TrailingIcon,
  ...props
}: InputProps) {
  return (
    <div className={style.inputField}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={style.inputWrapper}>
        {LeadingIcon && (
          <div className={style.leadingIconWrapper}>
            <LeadingIcon size={20} className={style.leadingIcon} />
          </div>
        )}
        <input name={name} type={type} {...props} />
        {TrailingIcon && (
          <div className={style.trailingIconWrapper}>
            <TrailingIcon size={20} className={style.trailingIcon} />
          </div>
        )}
      </div>
    </div>
  );
}
