import '../css/Widget.css';

function Widget(props) {
    return (
        <>
            <div className="Widget">
                <h1 className="Widget-Title">{props.title}</h1>

                {
                props.link ? 
                <img src={props.link} className="Widget-Img"></img>
                :
                <p>{props.text}</p>
                }

            </div>
        </>
    );
}
  
export default Widget;