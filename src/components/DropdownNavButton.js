import Link from './Link';
import '../css/Nav.css';

function DropdownNavButton(props) {
    return (
      <div className="dropdown-nav-button">
        <a href={props.link} onClick={props.onClick}>
        {props.icon && (
          <img src={props.icon} alt={`Icon for ${props.title}`} className="dropdown-icon" />
        )}
          {props.title}
        </a>
      </div>
    );
  }

export default DropdownNavButton;