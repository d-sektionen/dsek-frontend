import '../css/Nav.css';
import PageNavButton from './PageNavButton';

function calculatePageInterval(currentPage, totalPages) {
    const pageCount = 5; // Preferably an odd number, so that the current page is in the middle

    let startPage = 1;
    let endPage = totalPages;

    if (pageCount < totalPages) {
        const neighboringPages = pageCount - 1;
        const pagesToLeft = Math.ceil(neighboringPages / 2);
        const pagesToRight = Math.floor(neighboringPages / 2);

        startPage = currentPage - pagesToLeft;
        endPage = currentPage + pagesToRight;

        if (startPage < 1) {
            //endPage += 1 - startPage; // Makes sure there are {pageCount} pages even when at page 1
            startPage = 1;
        }

        if (endPage > totalPages) {
            //startPage += totalPages - endPage; // Makes sure there are {pageCount} pages even when at page {totalPages}
            endPage = totalPages;
        }
    }
    
    return { startPage, endPage };
}

function PageNav({ setPage, currentPage, totalPages }) {
    let buttons = [];
    let { startPage, endPage } = calculatePageInterval(currentPage, totalPages);

    if (currentPage !== 1) {
        buttons.push(<PageNavButton label="«" onClick={() => setPage(currentPage - 1)} />);
    }
    if (startPage !== 1) {
        buttons.push(<PageNavButton label={1} onClick={() => setPage(1)} />);
    }
    if (startPage > 2) {
        buttons.push(<PageNavButton label="..." disabled />);
    }

    for (let i = startPage; i <= endPage; i++) {
        buttons.push(<PageNavButton label={i} onClick={() => setPage(i)} selected={currentPage === i} />);
    }
    
    if (endPage < totalPages - 1) {
        buttons.push(<PageNavButton label="..." disabled />);
    }
    if (endPage !== totalPages) {
        buttons.push(<PageNavButton label={totalPages} onClick={() => setPage(totalPages)} />);
    }
    if (currentPage !== totalPages) {
        buttons.push(<PageNavButton label="»" onClick={() => setPage(currentPage + 1)} />);
    }
    
    return (
        <nav className="page-nav">
            {buttons}
        </nav>
    );
}

export default PageNav;
