import '../../css/Nav.css';
import Dropdown from './Dropdown';
import NavButton from './NavButton.js';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'

//import logos
import utbU from '../../images/utbU.png';
import werk from '../../images/werk.jpg';
import staben from '../../images/staben.png';
import mafu from '../../images/MAFU.png';
import näru from '../../images/NARU.png';
import pubu from '../../images/pubu.png';
import deg from '../../images/deg.png';
import alumni from '../../images/alumni.png';
import dgroup from '../../images/d-grupp.png';
import webbu from '../../images/webbu.png';
import valleb from '../../images/valleb.png'
import donna from '../../images/donna.png'
import link from '../../images/linkdagarna.png'

import placeholder from '../../images/placeholder.png'


function Nav({ setState, tabIndex }) {
    // konstruerar och returnerar en NavBar som innehåller vanliga knappar och
    // dropdownknappar

    const [ menuStyle, setMenuStyle ] = useState( 'none' )

    function handleClick() {
        setMenuStyle(menuStyle === "grid" ?  "none" : "grid")
    }

    const dropdownItemsSektionen = [
        ["Styrelsen", "/page/styrelsen"],
        ["Miljö", "/page/miljo"],
        ["Dokument", "/page/dokument"],
        ["Protokoll", "/page/protokoll"]
      ];

    const dropdownItemsUtskott = [
      ["EventU", "/utskott/eventu", placeholder],
      ["Alumni", "/utskott/alumni", alumni],
      ["D-Group", "/utskott/dgroup", dgroup],
      ["DONNA", "/utskott/donna", donna],
      ["DEG", "/utskott/deg", deg],
      ["InfU", "/utskott/infu", placeholder],
      ["LINK-dagarna", "/utskott/link", link],
      ["PubU", "/utskott/pubu", pubu],
      ["MafU", "/utskott/mafu", mafu],
      ["NärU", "/utskott/naru", näru],
      ["STABEN", "/utskott/staben", staben],
      ["UtbU", "/utskott/utbu", utbU],
      ["Valberedningen", "/utskott/valberedningen", valleb],
      ["WebbU", "https://www.webbu.se/", webbu],
      ["Werkmästeriet", "/utskott/werk", werk]
    ];

    const dropdownItemsBliStudent = [
      ["Utbildningar", "/page/utbildningar"],
      ["Bostad", "/page/bostad"],
      ["Skolan", "/page/skolan"],
      ["Studentliv", "/page/studentliv"],
      ["FAQ", "/page/faq"]
    ];

    const dropdownItemsExtra = [
      ["Sociala medier", "/extra/socialamedier"],
      ["Alumni-blogg", "https://d-sektionen.se/kategori/alumni-blogg/"],
      ["Exjobb", "/extra/exjobb"],
      ["Fotoalbum", "https://d-sektionen.se/filarkiv/fotoalbum/"]
    ];

    return (
      <>
        <div className='hamburger narrow-nav' tabIndex="0" onClick={handleClick}>
            <GiHamburgerMenu/>
        </div>
          <nav className="site-nav" setState={handleClick} style={{display:menuStyle}}>
            <Dropdown title="Sektionen" items={dropdownItemsSektionen}></Dropdown>
            <Dropdown title="Utskott" items={dropdownItemsUtskott}></Dropdown>
            <Dropdown title="Bli student" items={dropdownItemsBliStudent}></Dropdown>
            <NavButton title="Kalender" link="/kalender" />
            <NavButton title="Medlemstjänster" link="https://medlem.d-sektionen.se" />
            <NavButton title="Företag" link="/page/foretag" />
            <Dropdown title="Extra" items={dropdownItemsExtra}></Dropdown>
          </nav>
      </>
    );
}

export default Nav;