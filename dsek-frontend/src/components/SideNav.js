import '../css/Nav.css';
import SideNavButton from './SideNavButton.js';
import Widget from '../components/Widget.js';
import SearchBar from './SearchBar';


function SideNav() {
    return (
        <div className="Left">
            <SearchBar className={'SideNavSearch'}/>
            <nav className="SideNav">
                <SideNavButton title="Sociala medier" link="/page/socialamedier"/>
                <SideNavButton title="Kalender" link="#"/>
                <SideNavButton title="Medlemstjänster" link="https://medlem.d-sektionen.se/"/>
                <SideNavButton title="Fotoalbum" link="#"/>
                <SideNavButton title="Kontakt" link="#"/>
            </nav>
                <Widget title="Kommande aktiviteter" content={[[0, "Det finns inga kommande aktiviteter"]]}/>
        </div>
    );
}

export default SideNav;