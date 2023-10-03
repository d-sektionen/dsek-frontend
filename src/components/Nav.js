import '../css/Nav.css';
import Dropdown from './Dropdown';
import DropdownElements from './DropdownElements.js';
import NavButton from './NavButton.js';

function Nav({ setState }) {

    const dropdownItemsSektionen = [
        ["Styrelsen", "/page/styrelsen"],
        ["Miljö", "/page/miljo"],
        ["Dokument", "/page/dokument"],
        ["Protokoll", "/page/protokoll"]
      ];
      
    const dropdownItemsUtskott = [
      ["EventU", "/eventu"],
      ["Alumni", "/alumni", "https://d-sektionen.se/wp-content/uploads/2019/09/Webp.net-resizeimage.png"],
      ["D-Group", "https://d-group.se/", "https://d-sektionen.se/wp-content/uploads/2015/04/d-group.png"],
      ["DONNA", "https://donna.d-sektionen.se/", "https://donna.d-sektionen.se/wp-content/uploads/2019/08/cropped-output-onlinepngtools-1-100x49.png"],
      ["DEG", "/deg"],
      ["LINK-dagarna", "https://linkdagarna.se/", "https://d-sektionen.se/wp-content/uploads/2020/11/logotyp_linkdagarna.png"],
      ["PubU", "/pubu", "https://d-sektionen.se/wp-content/uploads/2018/09/pubu-768x442.png"],
      ["MafU", "/mafu"],
      ["NärU", "/naru", "https://d-sektionen.se/wp-content/uploads/2018/09/Logga-NarU-vit-768x568.png"],
      ["STABEN", "https://staben.info/", "https://staben.info/images/logo.png"],
      ["UtbU", "/utbu"],
      ["Valberedningen", "/valberedningen"],
      ["WebbU", "https://www.webbu.se/", "https://d-sektionen.se/wp-content/uploads/2020/10/webbgruppen-logo-1-2048x803.png"],
      ["Werkmästeriet", "/werk"]
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