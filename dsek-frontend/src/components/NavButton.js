import '../css/Nav.css';

function NavButton(props) {
    var handleClick = props.onClick;
    return (
        <a href={props.link} className="NavButton RegNavButton">
            <nav>
                {props.title}
            </nav>
        </a>
    );
}

export default NavButton;