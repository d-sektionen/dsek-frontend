import '../css/Nav.css'; 
import NavButton from './NavButton.js';
import DropdownNavButton from './DropdownNavButton.js';

function Nav() {
    return (
        <nav className="Menu">
            <DropdownNavButton title="Sektionen" link="#" titles={[["Styrelsen", "#"], ["Miljö", "#"], ["Dokument", "#"], ["Protokoll", "#"]]}/>
            <DropdownNavButton title="Utskott" link="#" titles={[["EventU", "/eventu"], ["Alumni", "/alumni"], ["D-Group", "https://d-group.se/"], ["DONNA", "https://donna.d-sektionen.se/"], ["DEG", "/deg"], ["LINK-dagarna", "https://linkdagarna.se/"], ["MafU", "/mafu"], ["NärU", "/naru"], ["STABEN", "https://staben.info/"], ["UtbU", "/utbu"], ["Valberedningen", "/valberedningen"], ["WebbU", "https://www.webbu.se/"], ["Werkmästeriet", "werk"]]}/>
            <DropdownNavButton title="Sökande" link="#" titles={[["Utbildningar", "#"], ["Bostad", "#"], ["Skolan", "#"], ["Studentliv", "#"], ["FAQ", "#"]]}/>
            <NavButton title="Alumni-blogg" link="https://google.com"/>
            <NavButton title="Exjobb" link="https://google.com"/>
            <NavButton title="Företag" link="https://google.com"/>
        </nav>
    );
}

export default Nav;