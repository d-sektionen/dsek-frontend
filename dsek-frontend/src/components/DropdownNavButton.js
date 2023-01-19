import '../css/Nav.css';

function DropdownNavButton(props) {

    return (
        <a className = "DropdownNavLink" href={props.link}>
            <nav className="DropdownNavButton">
                {props.title}
            </nav>
        </a>
    );
}

export default DropdownNavButton;