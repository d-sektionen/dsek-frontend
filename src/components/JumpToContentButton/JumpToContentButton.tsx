import style from "./JumpToContentButton.module.css";

export function JumpToContentButton() {
  return (
    <a className={style.button} href="#content">
      Hoppa till innehåll
    </a>
  );
}
