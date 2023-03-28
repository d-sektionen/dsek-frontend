import Link from './Link';
import '../css/Nav.css';

function NavButton(props) {
    var handleClick = props.onClick;
    return (
        <Link to={props.link} className="NavButton RegNavButton">
            <nav>
                {props.title}
            </nav>
        </Link>
    );
}

export default NavButton;