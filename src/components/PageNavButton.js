import "../css/PageNav.css";

function PageNavButton({ label, onClick, selected, disabled }) {
  return (
    <button
      className={selected ? "page-nav-button selected" : "page-nav-button"}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default PageNavButton;
