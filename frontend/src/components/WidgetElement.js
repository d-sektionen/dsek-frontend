import "../css/Widget.css";

function handleClick(name) {
  const btn = document.getElementById(name);
  btn?.click();
}

function WidgetElement(props) {
  return (
    <>
      {props.link ? (
        <div
          className="Widget-Element"
          onClick={() => handleClick(props.alt)}
          tabIndex="0"
        >
          {
            <a href={props.link} id={props.alt} tabIndex="-1">
              <img src={props.content} alt={props.alt} className="Widget-Img" />
            </a>
          }
        </div>
      ) : (
        <div className="Widget-Element">
          {<img src={props.content} id="Widget-Img" alt="hej" />}
        </div>
      )}
    </>
  );
}

export default WidgetElement;
