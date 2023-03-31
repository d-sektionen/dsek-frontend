import '../css/Nav.css';
import SearchBar from './SearchBar';
import SideNavButton from './SideNavButton.js';
import CalendarWidget from './CalendarWidget.js';


function SideNav() {
    return (
        <div className="Left">
            <SearchBar className={'SideNavSearch'} />
            <nav className="SideNav">
                <SideNavButton title="Sociala medier" link="/socialamedier" />
                <SideNavButton title="Kalender" link="/kalender" />
                <SideNavButton title="Medlemstjänster" link="https://medlem.d-sektionen.se" />
                <SideNavButton title="Fotoalbum" link="#" />
                <SideNavButton title="Kontakt" link="#" />
            </nav>
            <CalendarWidget title="Kommande aktiviteter" />
        </div>
    );
}

export default SideNav;