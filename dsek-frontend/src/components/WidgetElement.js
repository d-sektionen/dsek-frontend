import '../css/Widget.css';

function WidgetElement(props) {

    return (
        <>
            {
            props.link ?
            <div className='Widget-Element'>
                {
                    props.isImage ?
                    <a href={props.link}><img src={props.content} className="Widget-Img"/></a>
                    :
                    <p>{props.content}</p>
                }
            </div>
            :
            <div className='Widget-Element'>
                {
                    props.isImage ?
                    <img src={props.content} className="Widget-Img"/>
                    :
                    <p>{props.content}</p>
                }
            </div>
            }
        </>
    );
}
  
export default WidgetElement;