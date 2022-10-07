import '../css/Nav.css';
import NavButton from './NavButton.js';
import DropdownNavButton from './DropdownNavButton.js';

function Nav() {
    return (
        <nav className="Menu">
            <DropdownNavButton title="Sektionen" link="https://google.com" titles={["Sektionsinfo", "Styrelsen", "Miljö", "Dokument", "Protokoll"]}/>
            <DropdownNavButton title="Utskott" link="https://google.com" titles={["EventU", "Alumni", "D-Group", "DONNA", "DEG", "LINK-dagarna", "MafU", "NärU", "STABEN", "UtbU", "Valberedningen", "WebbU", "Werkmästeriet"]}/>
            <DropdownNavButton title="Sökande" link="https://google.com" titles={["Utbildningar", "Bostad", "Skolan", "Studentliv", "FAQ"]}/>
            <NavButton title="Alumni-blogg" link="https://google.com"/>
            <NavButton title="Exjobb" link="https://google.com"/>
            <NavButton title="Företag" link="https://google.com"/>
        </nav>
    );
}

export default Nav;