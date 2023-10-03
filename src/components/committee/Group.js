import { FaDiscord, FaFacebook, FaInstagram, FaRegEnvelope, FaTv } from 'react-icons/fa';
import '../../css/committee/Group.css';

function Group(props) {
    return (
        <div className="Group" style={{ "color": props.color, "background-color": props.background }}>
            <img src={props.img} alt="" />
            <p>{props.info}</p>
            {props.socials["Instagram"] ? <a href={props.socials["Instagram"]} aria-label="Instagram"><FaInstagram /></a> : <></>}
            {props.socials["Facebook"] ? <a href={props.socials["Facebook"]} aria-label="Facebook"><FaFacebook /></a> : <></>}
            {props.socials["Website"] ? <a href={props.socials["Website"]} aria-label="Website"><FaTv /></a> : <></>}
            {props.socials["Discord"] ? <a href={props.socials["Discord"]} aria-label="Discord"><FaDiscord /></a> : <></>}
            {props.socials["Mail"] ? <a href={"mailto:" + props.socials["Mail"]} aria-label="Mail"><FaRegEnvelope /></a> : <></>}
        </div>
    );
}

export default Group;