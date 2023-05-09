import Link from './Link';
import '../css/Nav.css';

function DropdownNavButton({ link, title }) {
    return (
        <Link className="dropdown-nav-button" to={link}>
            {title}
        </Link>
    );
}

export default DropdownNavButton;