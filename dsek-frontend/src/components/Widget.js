import '../css/Widget.css';
import WidgetElement from './WidgetElement';


function Widget(props) {
    return (
        <>
            <div className="Widget">
                <h1 className="Widget-Title">{props.title}</h1>
                {
                props.content ?
                props.content.map((x, i) =>
                    {
                        // <WidgetElement image={x[0]} content={x[1]} link={x[2]}/>
                        <WidgetElement key={i} image={x[0]} content={x[1]}/>
                    }
                )
                :
                <></>
                }
            </div>
        </>
    );
}
  
export default Widget;