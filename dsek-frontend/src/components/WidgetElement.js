import '../css/Widget.css';

function WidgetElement(props) {

    return (
        <>
            <div className='Widget-Element'>
                {
                    props.image ?
                    <img src={props.content} className="Widget-Img"/>
                    :
                    <p>{props.content}</p>
                }
            </div>
        </>
    );
}
  
export default WidgetElement;