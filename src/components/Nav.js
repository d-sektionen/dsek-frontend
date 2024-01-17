import '../css/Nav.css';
import Dropdown from './Dropdown';
import DropdownElements from './DropdownElements.js';
import NavButton from './NavButton.js';
import { useState } from 'react';

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
import valleb from '../images/valleb.png'

function Nav({ setState }) {

    const dropdownItemsSektionen = [
        ["Styrelsen", "/page/styrelsen"],
        ["Miljö", "/page/miljo"],
        ["Dokument", "/page/dokument"],
        ["Protokoll", "/page/protokoll"]
      ];
      
    const dropdownItemsUtskott = [
      ["EventU", "/eventu"],
      ["Alumni", "/alumni", alumni],
      ["D-Group", "/dgroup", dgroup],
      ["DONNA", "/donna", "https://donna.d-sektionen.se/wp-content/uploads/2019/08/cropped-output-onlinepngtools-1-100x49.png"],
      ["DEG", "/deg", deg],
      ["InfU", "/infu"],
      ["LINK-dagarna", "/link", "https://d-sektionen.se/wp-content/uploads/2020/11/logotyp_linkdagarna.png"],
      ["PubU", "/pubu", pubu],
      ["MafU", "/mafu", mafu],
      ["NärU", "/naru", näru],
      ["STABEN", "/staben", staben],
      ["UtbU", "/utbu", utbU],
      ["Valberedningen", "/valberedningen", valleb],
      ["WebbU", "https://www.webbu.se/", webbu],
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

    const [logoUrl, setLogoUrl] = useState("../logo_white.png");

    function dark() {
      let root = document.documentElement;
      if (root.style.getPropertyValue('--text-color') === 'var(--text-color-light)') {
        root.style.setProperty('--text-color', 'var(--text-color-dark)');
        root.style.setProperty('--bg-color', 'var(--bg-color-dark)');
        root.style.setProperty('--header-bg-color', 'var(--header-bg-color-dark)');
        root.style.setProperty('--navbar-bg-color', 'var(--navbar-bg-color-dark)');
        root.style.setProperty('--navbar-text-color', 'var(--navbar-text-color-dark)');
        root.style.setProperty('--footer-text-color', 'var(--footer-text-color-dark)');
        root.style.setProperty('--footer-bg-color', 'var(--footer-bg-color-dark)');
        root.style.setProperty('--widget-title-bg-color', 'var(--widget-title-bg-color-dark)');
        root.style.setProperty('--widget-title-border-color', 'var(--widget-title-border-color-dark)');
        setLogoUrl("../../public/logo_dark.ai"); 
      } else {
        root.style.setProperty('--text-color', 'var(--text-color-light)');
        root.style.setProperty('--bg-color', 'var(--bg-color-light)');
        root.style.setProperty('--header-bg-color', 'var(--header-bg-color-light)');
        root.style.setProperty('--navbar-bg-color', 'var(--navbar-bg-color-light)');
        root.style.setProperty('--navbar-text-color', 'var(--navbar-text-color-light)');
        root.style.setProperty('--footer-text-color', 'var(--footer-text-color-light)');
        root.style.setProperty('--footer-bg-color', 'var(--footer-bg-color-light)');
        root.style.setProperty('--widget-title-bg-color', 'var(--widget-title-bg-color-light)');
        root.style.setProperty('--widget-title-border-color', 'var(--widget-title-border-color-light)');
        setLogoUrl("../logo_white.png");
      }
  }
      
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
        <button type="button" onClick={dark}>D-Mode</button>
      </nav>
    );
}



export default Nav;