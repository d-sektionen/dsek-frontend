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
        /*<nav className="SideNav">
            <SideNavButton title="Sociala medier"/>
            <SideNavButton title="Kalender"/>
            <SideNavButton title="Medlemstjänster"/>
            <SideNavButton title="Fotoalbum"/>
            <SideNavButton title="Kontakt"/>
    </nav>*/
    );
}

/*
colors:
sociala color="#754022"
kalender color="#E5398D"
medlem color="#F7E623"
foto color="#70BD44"
kontakt color="#20407C"
*/

export default SideNav;