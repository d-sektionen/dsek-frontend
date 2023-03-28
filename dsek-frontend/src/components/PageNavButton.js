import Link from './Link';
import '../css/Nav.css';

function PageNavButton(props) {
    const className = props.currentPage === props.page ? "PageNavButton-Selected" : "PageNavButton"
    return (
        <nav>
            {
                props.disabled ? <Link className="PageNavButton-Disabled" to={props.link}>{props.page}</Link> :
                <span>
                    {
                        props.link ?
                        <Link className={className} to={props.link}>{props.page}</Link> :
                        <button className={className} onClick={ () => props.setPage(props.page) }>{props.page}</button>
                        
                    }
                </span>
            }
            
        </nav>
    );
}

export default PageNavButton;