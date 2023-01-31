import '../css/Nav.css';
import PageNavButton from './PageNavButton';

function PageNav(props) {    

    let pageNumbers = [];
    if(props.totalPages){
        pageNumbers = [...Array(props.totalPages).keys()] ;
        
    }

    let left = true;
    let right = true;

    if (props.currentPage == props.totalPages){
          right = false;
    }

    if(props.currentPage == 1){
          left = false;
    }

    function pages() { 
        
         
        let res = pageNumbers.filter((page, index) => Math.abs(index - props.currentPage) < 2 ).map((number) => <PageNavButton currentPage={props.currentPage} setPage={props.setPage} page={number+1} key={number} />) 

        if(props.currentPage != 1){
            res.unshift(<PageNavButton page="..." currentPage={props.currentPage} disabled = {true} />)
            res.unshift(<PageNavButton setPage={props.setPage} page={1} key={1} />)
        }
        res.push(<PageNavButton page="..." currentPage={props.currentPage} disabled = {true} />)
        res.push(<PageNavButton setPage={props.setPage} page={props.totalPages} key={props.totalPages} />)
        return res
   
    }

    return (
        <nav className="PageNav">

            {left ? <PageNavButton page="«" currentPage={props.currentPage} setPage={ () => props.setPage(props.currentPage-1)} /> : <PageNavButton page="«" currentPage={props.currentPage} disabled={true} />}
            {props.posts ? pages() : <> </>
            }
            {right ? <PageNavButton page="»" currentPage={props.currentPage} setPage={ () => props.setPage(props.currentPage+1)} /> : <PageNavButton page="»" currentPage={props.currentPage} disabled={true} />}
             
        </nav>
    );
}

export default PageNav;