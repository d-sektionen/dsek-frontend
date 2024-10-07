import "../../css/committee/FAQ.css";

function FAQ(props) {
  return (
    <div className="FAQ">
      <h1 className="FAQ-Title">
        <span className="FAQ-Question">Fråga:</span> {props.question}
      </h1>
      <hr />
      <p className="FAQ-Content">
        <span className="FAQ-Answer">Svar:</span> {props.answer}
      </p>
    </div>
  );
}

export default FAQ;
