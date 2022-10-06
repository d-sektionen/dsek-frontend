import '../css/Nav.css';

function SideNavButton(props) {
    return (
        <nav className="SideNavButton">
            <a href={props.link}>
                <div className="SideNavButton-Img"></div>
                <p className="SideNavButton-Title">{props.title}</p>
            </a>
        </nav>
    );
}

export default SideNavButton;