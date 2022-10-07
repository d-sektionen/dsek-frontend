import '../css/Nav.css';
import PageNavButton from './PageNavButton';

function PageNav(props) {
    return (
        <nav className="PageNav">
            <PageNavButton page="«" disabled={true}/>
            <PageNavButton page="1"/>
            <PageNavButton page="2" link="#"/>
            <PageNavButton page="3" link="#"/>
            <PageNavButton page="..." disabled={true}/>
            <PageNavButton page="115" link="#"/>
            <PageNavButton page="»" link="#"/>
        </nav>
    );
}

export default PageNav;