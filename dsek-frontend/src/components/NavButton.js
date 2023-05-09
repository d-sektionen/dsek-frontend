import '../css/Nav.css';
import Link from './Link';

function NavButton(props) {
    return (
        <Link to={props.link} className="NavButton RegNavButton">
            <nav>
                {props.title}
            </nav>
        </Link>
    );
}

export default NavButton;