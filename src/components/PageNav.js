import '../css/Nav.css';
import PageNavButton from './PageNavButton';

function PageNav(props) {

    let left = true;
    let right = true;

    if (props.currentPage == props.totalPages) {
        right = false;
    }

    if (props.currentPage == 1) {
        left = false;
    }

    function pages() {


        let res = [];

        // adds button for current page and +/- 1 page
        res.push(<PageNavButton setPage={props.setPage} page={props.currentPage - 1} key={props.currentPage - 1} />)
        res.push(<PageNavButton currentPage={props.currentPage} setPage={props.setPage} page={props.currentPage} key={props.currentPage} />)
        res.push(<PageNavButton setPage={props.setPage} page={props.currentPage + 1} key={props.currentPage + 1} />)


        //If current page is page 1, a page 0 will be added, remove this
        if (props.currentPage === 1) {
            res.shift();
            // res.push(<PageNavButton setPage={props.setPage} page={props.currentPage + 2} key={props.currentPage + 2} />)
        }


        //Removes button with number above total pages
        if (props.currentPage == props.totalPages && props.totalPages > 2) {
            res.pop();
            res.unshift(<PageNavButton setPage={props.setPage} page={props.currentPage - 2} key={props.currentPage - 2} />)
        }

        //If current page is not the last two pages, add '...' and the last page
        if (props.totalPages - props.currentPage > 1) {

            //if current page is more than one before last one, '...' should be added
            if (props.totalPages - props.currentPage > 2) {
                res.push(<PageNavButton page="..." currentPage={props.currentPage} disabled={true} />)
            }
            res.push(<PageNavButton setPage={props.setPage} page={props.totalPages} key={props.totalPages} />)
        }

        return res

    }

    return (
        <nav className="PageNav">

            {left ? <PageNavButton page="«" currentPage={props.currentPage} setPage={() => props.setPage(1)} /> : <PageNavButton page="«" currentPage={props.currentPage} disabled={true} />}
            {left ? <PageNavButton page="<" currentPage={props.currentPage} setPage={() => props.setPage(props.currentPage - 1)} /> : <PageNavButton page="<" currentPage={props.currentPage} disabled={true} />}
            {props.posts ? pages() : <> </>
            }
            {right ? <PageNavButton page=">" currentPage={props.currentPage} setPage={() => props.setPage(props.currentPage + 1)} /> : <PageNavButton page=">" currentPage={props.currentPage} disabled={true} />}
            {right ? <PageNavButton page="»" currentPage={props.currentPage} setPage={() => props.setPage(props.totalPages)} /> : <PageNavButton page="»" currentPage={props.currentPage} disabled={true} />}

        </nav>
    );
}

export default PageNav;
