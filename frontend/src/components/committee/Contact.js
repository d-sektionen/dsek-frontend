import "../../css/committee/Contact.css";
import { getData } from "../../utils/NetFuncs";
import React, { useState, useEffect } from "react";

function Contact(props) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    (async () => {
      setUser(await getData("users/" + props.liuid));
    })();
  }, [props.liuid]);

  return (
    <div className="Contact">
      <p>
        {user.Name ? (
          <>
            <span className="Contact-Name">{user.Name} </span>
            <span className="Contact-Post">({user.Post}) </span>
          </>
        ) : (
          <span className="Contact-Post">{user.Post} </span>
        )}
        -{" "}
        <a className="Contact-Mail" href={"mailto:" + user.Mail}>
          {user.Mail}
        </a>
      </p>
    </div>
  );
}

export default Contact;
