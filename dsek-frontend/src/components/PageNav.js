import '../css/Nav.css';
import PageNavButton from './PageNavButton';

function PageNav(props) {    

    let pageNumbers = [];
    if(props.totalPages){
        pageNumbers = [...Array(props.totalPages).keys()] ;
        
    }


    return (
        <nav className="PageNav">

            <PageNavButton page="«" currentPage={props.currentPage} disabled={true}/>
            {props.posts ? 
                    pageNumbers.map((number) => <PageNavButton currentPage={props.currentPage} setPage={props.setPage} page={number+1} key={number} />)
                    : 
                    <> </>
            }
            <PageNavButton page="»" currentPage={props.currentPage} setPage={ () => props.setPage(props.currentPage+1)} />
        </nav>
    );
}

export default PageNav;