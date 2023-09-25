import '../css/Nav.css';
import CalendarWidget from './CalendarWidget.js';
import SearchBar from './SearchBar';
import SideNavButton from './SideNavButton.js';


function SideNav() {
    return (
        <div className="Left">
            <SearchBar className={'SideNavSearch'} />
            {/* 
            <nav className="SideNav">
                <SideNavButton title="Sociala medier" link="/socialamedier" />
                <SideNavButton title="Kalender" link="/kalender" />
                <SideNavButton title="Medlemstjänster" link="https://medlem.d-sektionen.se" />
                <SideNavButton title="Fotoalbum" link="#" />
            </nav>
            */}
            <CalendarWidget title="Månadens aktiviteter" />
        </div>
    );
}

export default SideNav;