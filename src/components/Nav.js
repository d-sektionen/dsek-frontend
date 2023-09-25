import '../css/Nav.css';
import Dropdown from './Dropdown';
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
                ["D-Group", "https://d-group.se/", "https://d-sektionen.se/wp-content/uploads/2015/04/d-group.png"], 
                ["DONNA", "https://donna.d-sektionen.se/", "https://donna.d-sektionen.se/wp-content/uploads/2019/08/cropped-output-onlinepngtools-1-100x49.png"], 
                ["DEG", "/deg"], ["LINK-dagarna", "https://linkdagarna.se/"], ["PubU", "/pubu", "https://d-sektionen.se/wp-content/uploads/2018/09/pubu-768x442.png"], ["MafU", "/mafu"],
                ["NärU", "/naru"], ["STABEN", "https://staben.info/", "https://staben.info/images/logo.png"], ["UtbU", "/utbu"], ["Valberedningen", "/valberedningen"],
                ["WebbU", "https://www.webbu.se/"], ["Werkmästeriet", "/werk"]]} />
            </Dropdown>
            <Dropdown content="Bli student">
                <DropdownElements setState={setState} titles={[["Utbildningar", "/page/utbildningar"], ["Bostad", "/page/bostad"],
                ["Skolan", "/page/skolan"], ["Studentliv", "/page/studentliv"], ["FAQ", "/page/faq"]]} />
            </Dropdown>
            <NavButton title="Kalender" link="/kalender" />
            <NavButton title="Medlemstjänster" link="https://medlem.d-sektionen.se" />
            <NavButton title="Företag" link="/page/foretag" />
            <Dropdown content="Extra">
                <DropdownElements setState={setState} titles={[["Sociala medier", "/socialamedier"], ["Alumni-blogg", "https://d-sektionen.se/kategori/alumni-blogg/"], 
                ["Exjobb", "https://d-sektionen.se/kategori/exjobb/"], ["Fotoalbum", "https://d-sektionen.se/filarkiv/fotoalbum/"]]} />
            </Dropdown>
        </nav >
    );
}

export default Nav;