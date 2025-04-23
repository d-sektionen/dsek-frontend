import React, { useEffect, useState } from "react";
import "../../css/committee/Contact.css";
import { getData } from "../../utils/NetFuncs";

export default function CommitteeContacts(props) {
  const [ContactData, setContactData] = useState([]);
  useEffect(() => {
    (async () => {
      setContactData(await getData("contact"));
    })();
  }, []);

  return (
    <div className="Contact">
      {ContactData.map((contactData) =>
        contactData["Committee"] === props.name ? (
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
