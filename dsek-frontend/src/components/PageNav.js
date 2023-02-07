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
        

        let res = [];// = pageNumbers.filter((page, index) => Math.abs(index - props.currentPage) <= 1 ).map((number) => 
       // <PageNavButton currentPage={props.currentPage} setPage={props.setPage} page={number+1} key={number} />) 
        
        res.push(<PageNavButton setPage={props.setPage} page={props.currentPage - 1} key={props.currentPage - 1} />)
        res.push(<PageNavButton currentPage={props.currentPage} setPage={props.setPage} page={props.currentPage} key={props.currentPage} />)
        res.push(<PageNavButton setPage={props.setPage} page={props.currentPage + 1} key={props.currentPage + 1} />)

        if(props.currentPage === 1) {
            res.shift();
            res.push(<PageNavButton setPage={props.setPage} page={props.currentPage + 2} key={props.currentPage + 2} />)
        } 

        if(props.totalPages - props.currentPage > 3){
            res.push(<PageNavButton page="..." currentPage={props.currentPage} disabled = {true} />)
            res.push(<PageNavButton setPage={props.setPage} page={props.totalPages} key={props.totalPages} />)
        } else {
            // todo: vill ha 5 sista siffer-knapparna
         
        }

        // Removes button with number above total pages, and adds one before, -2 from totalpage, for it to be three buttons
        if(props.currentPage == props.totalPages){
            res.unshift(<PageNavButton setPage={props.setPage} page={props.currentPage - 2} key={props.currentPage - 2} />)
            res.pop();
        }
        return res
   
    }

    return (
        <nav className="PageNav">

            {left ? <PageNavButton page="«" currentPage={props.currentPage} setPage={ () => props.setPage(1)} /> : <PageNavButton page="«" currentPage={props.currentPage} disabled={true} />}
            {left ? <PageNavButton page="<" currentPage={props.currentPage} setPage={ () => props.setPage(props.currentPage - 1)} /> : <PageNavButton page="<" currentPage={props.currentPage} disabled={true} />}
            {props.posts ? pages() : <> </>
            }
            {right ? <PageNavButton page=">" currentPage={props.currentPage} setPage={ () => props.setPage(props.currentPage + 1)} /> : <PageNavButton page=">" currentPage={props.currentPage} disabled={true} />}
            {right ? <PageNavButton page="»" currentPage={props.currentPage} setPage={ () => props.setPage(props.totalPages)} /> : <PageNavButton page="»" currentPage={props.currentPage} disabled={true} />}
             
        </nav>
    );
}

export default PageNav;