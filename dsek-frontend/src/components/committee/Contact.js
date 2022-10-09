import '../../css/committee/Contact.css'

function Contact(props) {
  return (
    <div className="Contact">
        <p>
            {
                props.name ? <><span className="Contact-Name">{props.name} </span><span className="Contact-Post">({props.post}) </span></> :
                <span className="Contact-Post">{props.post} </span>
            }            
            - <a className="Contact-Mail" href={"mailto:" + props.mail}>{props.mail}</a>
        </p>
    </div>
  );
}

export default Contact;