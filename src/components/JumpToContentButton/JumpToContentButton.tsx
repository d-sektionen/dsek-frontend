import style from "./JumpToContentButton.module.css";

export function JumpToContentButton() {
  return (
    <a className={style.button} tabIndex={0} href="#content">
      Hoppa till innehåll
    </a>
  );
}
