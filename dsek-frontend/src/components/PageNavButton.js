import '../css/Nav.css';

function PageNavButton(props) {
    const className = props.currentPage === props.page ? "PageNavButton-Selected" : "PageNavButton"
    return (
        <nav>
            {
                props.disabled ? <a className="PageNavButton-Disabled" href={props.link}>{props.page}</a> : 
                <span>
                    {
                        props.link ?
                        <a className={className} href={props.link}>{props.page}</a> :
                        <button className={className} onClick={ () => props.setPage(props.page) }>{props.page}</button>
                        
                    }
                </span>
            }
            
        </nav>
    );
}

export default PageNavButton;