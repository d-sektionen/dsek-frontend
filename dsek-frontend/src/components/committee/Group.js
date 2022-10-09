import '../../css/committee/Group.css'

function Group(props) {
  return (
    <div className="Group" style={{"color": props.color, "background-color": props.background}}>
        <img src={props.img} />
        <p>{props.info}</p>
        {props.socials["Instagram"] ? <a href={props.socials["Instagram"]}>Instagram</a> : <></>}
        {props.socials["Facebook"] ? <a href={props.socials["Facebook"]}>Facebook</a> : <></>}
        {props.socials["Website"] ? <a href={props.socials["Website"]}>Hemsida</a> : <></>}
        {props.socials["Discord"] ? <a href={props.socials["Discord"]}>Discord</a> : <></>}
        {props.socials["Mail"] ? <a href={props.socials["Mail"]}>Mail</a> : <></>}
    </div>
  );
}

export default Group;