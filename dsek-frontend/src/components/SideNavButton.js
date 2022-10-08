import '../css/Nav.css';

function SideNavButton(props) {
    return (
        <div className="SideNavButton">
            <a href={props.link}>
                <div className="SideNavButton-Img" style={{background: props.color}}></div>
                <div className="SideNavButton-Text">{props.title}</div>
            </a>
        </div>
    );
}

export default SideNavButton;