import Link from './Link';
import '../css/Nav.css';

function SideNavButton(props) {
    const isExternalLink = props.link.startsWith('http');

    return (
        <div className="SideNavButton" id={props.id} >
            <Link to={props.link}>
                <div className="SideNavButton-Img" ></div>
                <div className="SideNavButton-Text">{props.title}</div>
            </Link>
        </div>
    );
}
export default SideNavButton;