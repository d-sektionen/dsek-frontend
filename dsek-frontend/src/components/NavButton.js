import '../css/Nav.css';

function NavButton(props) {
    return (
        <nav className="NavButton">
            <a href={props.link}>{props.title}</a>
        </nav>
    );
}

export default NavButton;