import Link from './Link';
import '../css/Nav.css';

function DropdownNavButton(props) {
    return (
      <div className="dropdown-nav-button">
        {props.icon && (
          <img src={props.icon} alt={`Icon for ${props.title}`} className="dropdown-icon" />
        )}
        <a href={props.link} onClick={props.onClick}>
          {props.title}
        </a>
      </div>
    );
  }

export default DropdownNavButton;