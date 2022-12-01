import '../css/Nav.css';
import SideNavButton from './SideNavButton.js';
import Widget from '../components/Widget.js';


function SideNav() {
    return (
        <div className="Left">
            <nav className="SideNav">
                <SideNavButton title="Sociala medier" link="#"/>
                <SideNavButton title="Kalender" link="#"/>
                <SideNavButton title="Medlemstjänster" link="#"/>
                <SideNavButton title="Fotoalbum" link="#"/>
                <SideNavButton title="Kontakt" link="#"/>
            </nav>
                <Widget title="Kommande aktiviteter" content={[[0, "Det finns inga kommande aktiviteter"]]}/>
        </div>
    );
}

export default SideNav;