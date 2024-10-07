function DropdownNavButton(props) {
  // knapp för ett objekt i dropdown (ett "dropdown item")
  function handleClick() {
    console.log(this);
  }

  return (
    <a
      tabIndex={"0"}
      className={
        props.title === "STABEN"
          ? "staben dropdown-nav-button"
          : "dropdown-nav-button"
      }
      href={props.link}
    >
      <div className="button-layout">
        {props.icon && (
          <img
            src={props.icon}
            alt={`Icon for ${props.title}`}
            className="dropdown-icon"
          />
        )}
        <p>{props.title}</p>
      </div>
    </a>
  );
}

export default DropdownNavButton;
