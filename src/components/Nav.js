import '../css/Nav.css';
import Dropdown from './Dropdown';
import DropdownElements from './DropdownElements.js';
import NavButton from './NavButton.js';

//import logos
import utbU from '../images/utbU.png';
import werk from '../images/werk.jpg';
import staben from '../images/staben.png';
import mafu from '../images/MAFU.png';
import näru from '../images/NARU.png';
import pubu from '../images/pubu.png';
import deg from '../images/deg.png';
import alumni from '../images/alumni.png';
import dgroup from '../images/d-grupp.png';
import webbu from '../images/webbu.png';

function Nav({ setState }) {

    const dropdownItemsSektionen = [
        ["Styrelsen", "/page/styrelsen"],
        ["Miljö", "/page/miljo"],
        ["Dokument", "/page/dokument"],
        ["Protokoll", "/page/protokoll"]
      ];
      
    const dropdownItemsUtskott = [
      ["Alumni", "/utskott/alumni", alumni],
      ["D-Group", "/utskott/dgroup", dgroup],
      ["DONNA", "/utskott/donna", "https://donna.d-sektionen.se/wp-content/uploads/2019/08/cropped-output-onlinepngtools-1-100x49.png"],
      ["DEG", "/utskott/deg", deg],
      ["EventU", "/utskott/eventu"],
      ["InfU", "/utskott/infu"],
      ["LINK-dagarna", "/utskott/link", "https://d-sektionen.se/wp-content/uploads/2020/11/logotyp_linkdagarna.png"],
      ["PubU", "/utskott/pubu", pubu],
      ["MafU", "/utskott/mafu", mafu],
      ["NärU", "/utskott/naru", näru],
      ["SchlagU", "/utskott/schlagu"],
      ["STABEN", "/utskott/staben", staben],
      ["UtbU", "/utskott/utbu", utbU],
      ["Valberedningen", "/utskott/valberedningen"],
      ["WebbU", "/utskott/webbu", webbu],
      ["Werkmästeriet", "/werk", werk]
    ];
      
    const dropdownItemsBliStudent = [
      ["Utbildningar", "/page/utbildningar"],
      ["Bostad", "/page/bostad"],
      ["Skolan", "/page/skolan"],
      ["Studentliv", "/page/studentliv"],
      ["FAQ", "/page/faq"]
    ];
      
    const dropdownItemsExtra = [
      ["Sociala medier", "/socialamedier"],
      ["Alumni-blogg", "https://d-sektionen.se/kategori/alumni-blogg/"],
      ["Exjobb", "https://d-sektionen.se/kategori/exjobb/"],
      ["Fotoalbum", "https://d-sektionen.se/filarkiv/fotoalbum/"]
    ];
      
    return (
      <nav className="site-nav">
        <Dropdown content="Sektionen">
          <DropdownElements setState={setState} titles={dropdownItemsSektionen} />
        </Dropdown>
        <Dropdown content="Utskott">
        <DropdownElements setState={setState} titles={dropdownItemsUtskott} />
        </Dropdown>
        <Dropdown content="Bli student">
          <DropdownElements setState={setState} titles={dropdownItemsBliStudent} />
        </Dropdown>
        <NavButton title="Kalender" link="/kalender" />
        <NavButton title="Medlemstjänster" link="https://medlem.d-sektionen.se" />
        <NavButton title="Företag" link="/page/foretag" />
        <Dropdown content="Extra">
          <DropdownElements setState={setState} titles={dropdownItemsExtra} />
        </Dropdown>
      </nav>
    );
}

export default Nav;