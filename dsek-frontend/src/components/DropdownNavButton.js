import NavButton from './NavButton.js';
import '../css/Nav.css';

function DropdownNavButton(props) {

    return (
        <nav className="DropdownNavButton NavButton">
            <a href={props.link}>{props.title}</a>
        </nav>
    );
}

export default DropdownNavButton;