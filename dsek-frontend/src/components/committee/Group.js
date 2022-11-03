import '../../css/committee/Group.css'
import { FaInstagram, FaFacebook, FaRegEnvelope, FaDiscord, FaTv } from 'react-icons/fa'

function Group(props) {
  return (
    <div className="Group" style={{"color": props.color, "background-color": props.background}}>
        <img src={props.img} alt=""/>
        <p>{props.info}</p>
        {props.socials["Instagram"] ? <a href={props.socials["Instagram"]}><FaInstagram/></a> : <></>}
        {props.socials["Facebook"] ? <a href={props.socials["Facebook"]}><FaFacebook/></a> : <></>}
        {props.socials["Website"] ? <a href={props.socials["Website"]}><FaTv/></a> : <></>}
        {props.socials["Discord"] ? <a href={props.socials["Discord"]}><FaDiscord/></a> : <></>}
        {props.socials["Mail"] ? <a href={props.socials["Mail"]}><FaRegEnvelope/></a> : <></>}
    </div>
  );
}

export default Group;