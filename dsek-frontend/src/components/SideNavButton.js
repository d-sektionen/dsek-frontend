import '../css/Nav.css';

function SideNavButton(props) {
    return (
        <div className="SideNavButton" id={props.id} >
            <a href={props.link}>
                <div className="SideNavButton-Img" ></div>
                <div className="SideNavButton-Text">{props.title}</div>
            </a>
        </div>
    );
}
export default SideNavButton;