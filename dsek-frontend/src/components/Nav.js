import '../css/Nav.css';
import NavButton from './NavButton.js';
import Element from './Element.js';
import Dropdown from './Dropdown';

function Nav() {
    return (
        <nav className='Menu'>
            <Dropdown content="Sektionen">
                <Element titles={[["Styrelsen", "/page/styrelsen"], ["Miljö", "#"],
                ["Dokument", "#"], ["Protokoll", "#"]]} />
            </Dropdown>
            <Dropdown content="Utskott">
                <Element titles={[["EventU", "/eventu"], ["Alumni", "/alumni"],
                ["D-Group", "https://d-group.se/"], ["DONNA",
                    "https://donna.d-sektionen.se/"], ["DEG", "/deg"],
                ["LINK-dagarna", "https://linkdagarna.se/"], ["PubU", "/pubu"],
                ["MafU", "/mafu"], ["NärU", "/naru"], ["STABEN",
                    "https://staben.info/"], ["UtbU", "/utbu"],
                ["Valberedningen", "/valberedningen"], ["WebbU",
                    "https://www.webbu.se/"], ["Werkmästeriet", "werk"]]} />
            </Dropdown>
            <Dropdown content="Sökande">
                <Element titles={[["Utbildningar", "#"], ["Bostad", "#"],
                ["Skolan", "#"], ["Studentliv", "#"], ["FAQ", "#"]]} />
            </Dropdown>
            <NavButton title="Alumni-blogg" link="https://google.com" />
            <NavButton title="Exjobb" link="https://google.com" />
            <NavButton title="Företag" link="https://google.com" />
        </nav>
    );
}

export default Nav;