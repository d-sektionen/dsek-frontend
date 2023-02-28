import Widget from '../components/Widget.js';
import '../css/Nav.css';
import SearchBar from './SearchBar';
import SideNavButton from './SideNavButton.js';


function SideNav() {
    return (
        <div className="Left">
            <SearchBar className={'SideNavSearch'} />
            <nav className="SideNav">
                <SideNavButton title="Sociala medier" link="/page/socialamedier" />
                <SideNavButton title="Kalender" link="/kalender" />
                <SideNavButton title="Medlemstjänster" link="https://medlem.d-sektionen.se" />
                <SideNavButton title="Fotoalbum" link="#" />
                <SideNavButton title="Kontakt" link="#" />
            </nav>
            <Widget title="Kommande aktiviteter" content={[[0, "Det finns inga kommande aktiviteter"]]} />
        </div>
    );
}

export default SideNav;