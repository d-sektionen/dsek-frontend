import { FaDiscord, FaFacebook, FaInstagram, FaRegEnvelope, FaTv } from 'react-icons/fa';
import '../../css/committee/Group.css';

import aktuImage from '../../images/aktu.png';
import dbandImage from '../../images/dband.png';
import dlanImage from '../../images/dlan.png';
import d20Image from '../../images/d20.png';
import schlaguImage from '../../images/schlagu.png';

function Group(props) {
    const colors = {
        "aktu": "#6ebe45",
        "dlan": "#62ccca",
        "dband": "black",
        "d20" : "#725992",
        "schlagu" : "pink",
    }
    const color = props.slug;

    const images = {
        "aktu": aktuImage,
        "dlan": dlanImage,
        "dband": dbandImage,
        "d20" : d20Image,
        "schlagu" : schlaguImage,
    }

    return (
        <div className="Group" style={{ "color": "white" , "background-color": colors[color] }}>
            <img src={images[props.slug]} alt={props.title} />
            <p>{props.info}</p>
            {props.instagram ? <a href={props.instagram} aria-label="Instagram"><FaInstagram /></a> : <></>}
            {props.facebook ? <a href={props.facebook} aria-label="Facebook"><FaFacebook /></a> : <></>}
            {props.website ? <a href={props.website} aria-label="Website"><FaTv /></a> : <></>}
            {props.discord ? <a href={props.discord} aria-label="Discord"><FaDiscord /></a> : <></>}
            {props.mail ? <a href={"mailto:" + props.mail} aria-label="Mail"><FaRegEnvelope /></a> : <></>}
        </div>
    );
}

export default Group;