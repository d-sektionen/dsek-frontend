import '../css/Nav.css';

function NavButton(props) {
    var handleClick = props.onClick;
    return (
        <nav className="NavButton RegNavButton">
            <a href={props.link}>{props.title}</a>
        </nav>
    );
}

export default NavButton;