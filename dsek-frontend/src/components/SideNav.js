import '../css/Nav.css';
import SideNavButton from './SideNavButton.js';


function SideNav() {
    return (
        <nav className="SideNav">
            <SideNavButton title="Sociala medier"/>
            <SideNavButton title="Kalender"/>
            <SideNavButton title="Medlemstjänster"/>
            <SideNavButton title="Fotoalbum"/>
            <SideNavButton title="Kontakt"/>
        </nav>
    );
}

export default SideNav;