import '../css/Nav.css';

function PageNavButton(props) {
    return (
        <nav>
            {
                props.disabled ? <a className="PageNavButton-Disabled" href={props.link}>{props.page}</a> : 
                <span>
                    {
                        props.link ?
                        <a className="PageNavButton" href={props.link}>{props.page}</a> :
                        <a className="PageNavButton-Selected" href={props.link}>{props.page}</a>
                    }
                </span>
            }
            
        </nav>
    );
}

export default PageNavButton;