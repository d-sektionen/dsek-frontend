import '../css/Nav.css';

function SideNavButton(props) {
    //var col = props.color;
    return (
        <div className="SideNavButton">
            <a href={props.link}>
                <div className="SideNavButton-Img" ></div>
                <div className="SideNavButton-Text">{props.title}</div>
            </a>
        </div>
    );
}
//style={{background: props.color}} lägg till efter -Img" kke
//^ men ta isåfall bort färgerna i SideNav.js
export default SideNavButton;