import '../css/Nav.css';
import Dropdown from "./Dropdown";
import DropdownElements from './DropdownElements.js';
import NavButton from './NavButton.js';

function Nav({ setState }) {
    return (
        <nav className="site-nav">
            <Dropdown content="Sektionen">
                <DropdownElements setState={setState} titles={[["Styrelsen", "/page/styrelsen"], ["Miljö", "/page/miljo"],
                    ["Dokument", "/page/dokument"], ["Protokoll", "/page/protokoll"]]} />
            </Dropdown>
            <Dropdown content="Utskott">
                <DropdownElements setState={setState} titles={[["EventU", "/eventu"], ["Alumni", "/alumni"],
                    ["D-Group", "https://d-group.se/"], ["DONNA", "https://donna.d-sektionen.se/"], ["DEG", "/deg"],
                    ["LINK-dagarna", "https://linkdagarna.se/"], ["PubU", "/pubu"], ["MafU", "/mafu"], 
                    ["NärU", "/naru"], ["STABEN", "https://staben.info/"], ["UtbU", "/utbu"], ["Valberedningen", "/valberedningen"],
                    ["WebbU", "https://www.webbu.se/"], ["Werkmästeriet", "/werk"]]} />
            </Dropdown>
            <Dropdown content="Bli student">
                <DropdownElements setState={setState} titles={[["Utbildningar", "/page/utbildningar"], ["Bostad", "/page/bostad"],
                    ["Skolan", "/page/skolan"], ["Studentliv", "/page/studentliv"], ["FAQ", "/page/faq"]]} />
            </Dropdown>
            <NavButton title="Alumni-blogg" link="https://google.com" />
            <NavButton title="Exjobb" link="https://google.com" />
            <NavButton title="Företag" link="/page/foretag" />
        </nav>
    );
}

export default Nav;