import '../css/Nav.css';

function PageNavButton(props) {
    const className = props.currentPage === props.page ? "page-nav-button selected" : "page-nav-button"
    return (
        <button className={className} onClick={ () => props.setPage(props.page) } disabled={props.disabled === true}>{props.page}</button>
    );
}

export default PageNavButton;