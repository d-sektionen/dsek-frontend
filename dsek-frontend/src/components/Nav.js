import '../css/Nav.css';
import NavButton from './NavButton.js';

function Nav() {
    return (
        <nav className="Menu">
            <NavButton title="Sektionen ⯆" link="https://google.com"/>
            {
                /** TODO Sektionen dropdown
                 *  Sektionsinfo
                 *  Styrelsen, kansliet & SnOrdfar
                 *  Miljö & Arbetsmiljö
                 *  Grafisk profil
                 *  Aktuella dokument
                 *  Protokoll styrelsemöten
                 */
            }
            <NavButton title="Utskott ⯆" link="https://google.com"/>
            {
                /** TODO Utskott dropdown
                 *  Eventutskottet
                 *  Alumni
                 *  D-Group
                 *  DONNA - D-sektionens Damförening
                 *  DEG
                 *  Infoutskottet
                 *  LINK-dagarna
                 *  Marknadsföringsutskottet
                 *  Näringslivsutskottet
                 *  Pubutskottet
                 *  STABEN
                 *  Utbildningsutskottet
                 *  Valberedningen
                 *  Webbutskottet
                 *  Werkmästeriet
                 */
            }
            <NavButton title="Sökande ⯆" link="https://google.com"/>
            {
                /** TODO Sökande dropdown
                 *  Utbildningar
                 *  Bostad
                 *  Skolan
                 *  Studentliv
                 *  FAQ
                 */
            }
            <NavButton title="Alumni-blogg" link="https://google.com"/>
            <NavButton title="Exjobb" link="https://google.com"/>
            <NavButton title="Företag" link="https://google.com"/>
        </nav>
    );
}

export default Nav;