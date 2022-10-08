import '../css/Nav.css';
import SideNavButton from './SideNavButton.js';


function SideNav() {
    return (
        <nav className="SideNav">
            <SideNavButton title="Sociala medier" color="#754022"/>
            <SideNavButton title="Kalender" color="#E5398D"/>
            <SideNavButton title="Medlemstjänster" color="#F7E623"/>
            <SideNavButton title="Fotoalbum" color="#70BD44"/>
            <SideNavButton title="Kontakt" color="#20407C"/>
        </nav>
    );
}

export default SideNav;