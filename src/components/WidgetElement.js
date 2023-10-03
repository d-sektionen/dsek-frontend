import '../css/Widget.css';

function WidgetElement(props) {
    return (
        <>
            {
                props.link ?
                    <div className='Widget-Element'>
                        {
                            <a href={props.link}><img src={props.content} alt={props.alt} className="Widget-Img" /></a>
                        }
                    </div>
                    :
                    <div className='Widget-Element'>
                        {
                            <img src={props.content} className="Widget-Img" alt="hej" />
                        }
                    </div>
            }
        </>
    );
}

export default WidgetElement;