import '../css/Nav.css';
import NavButton from './NavButton.js';
import DropdownElements from './DropdownElements.js';
import Dropdown from './Dropdown';

function Nav() {
    return (
        <nav className='Menu'>
            <Dropdown content="Sektionen">
                <DropdownElements titles={[["Styrelsen", "/page/styrelsen"], ["Miljö", "/page/miljo"],
                ["Dokument", "/page/dokument"], ["Protokoll", "/page/protokoll"]]} />
            </Dropdown>
            <Dropdown content="Utskott">
                <DropdownElements titles={[["EventU", "/eventu"], ["Alumni", "/alumni"],
                ["D-Group", "https://d-group.se/"], ["DONNA",
                    "https://donna.d-sektionen.se/"], ["DEG", "/deg"],
                ["LINK-dagarna", "https://linkdagarna.se/"], ["PubU", "/pubu"],
                ["MafU", "/mafu"], ["NärU", "/naru"], ["STABEN",
                    "https://staben.info/"], ["UtbU", "/utbu"],
                ["Valberedningen", "/valberedningen"], ["WebbU",
                    "https://www.webbu.se/"], ["Werkmästeriet", "/werk"]]} />
            </Dropdown>
            <Dropdown content="Bli student">
                <DropdownElements titles={[["Utbildningar", "/page/utbildningar"], ["Bostad", "/page/bostad"],
                ["Skolan", "/page/skolan"], ["Studentliv", "/page/studentliv"], ["FAQ", "/page/faq"]]} />
            </Dropdown>
            <NavButton title="Alumni-blogg" link="https://google.com" />
            <NavButton title="Exjobb" link="https://google.com" />
            <NavButton title="Företag" link="https://google.com" />
        </nav>
    );
}

export default Nav;