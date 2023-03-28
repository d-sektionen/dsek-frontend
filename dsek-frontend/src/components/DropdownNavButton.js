import Link from './Link';
import '../css/Nav.css';

function DropdownNavButton(props) {
    return (
        <Link className="DropdownNavLink" to={props.link}>
            <nav className="DropdownNavButton">
                {props.title}
            </nav>
        </Link>
    );
}

export default DropdownNavButton;