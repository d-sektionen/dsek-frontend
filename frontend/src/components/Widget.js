import "../css/Widget.css";
import WidgetElement from "./WidgetElement";

// "content" should be an array of arrays, eg.:
// [[0, "example paragraph text"], [1, "img.png", "https://link.com"], [1, "img.png"]]
// i.e. [is image?, image src / paragraph text, link (optional, only for images)]
function Widget(props) {
  return (
    <>
      <div className="Widget">
        <h1 className="Widget-Title">{props.title}</h1>
        {props.content ? (
          props.content.map((x, i) => (
            <WidgetElement key={i} alt={x[0]} content={x[1]} link={x[2]} />
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Widget;
