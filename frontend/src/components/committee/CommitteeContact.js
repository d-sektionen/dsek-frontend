import React, { useState } from "react";
import { getData } from "../";
import "../../css/committee/Contact.css";

function CommitteeContacts(props) {
  const [ContactData, setContactData] = useState([]);
  useEffect(() => {
    (async () => {
      setContactData(await getData("contact"));
    })();
  }, []);

  return (
    <div className="Contact">
      {ContactData.map((contactData) =>
        contactData["Committee"] === "Alumni" ? (
          <>
            {" "}
            {contactData.People.map((person) => {
              const mailLink = "mailto:" + person.Mail;
              return (
                <p>
                  {" "}
                  {person.Name} - <a href={mailLink}>{person.Mail}</a>
                </p>
              );
            })}{" "}
          </>
        ) : (
          <></>
        ),
      )}
    </div>
  );
}

export default Contact;
