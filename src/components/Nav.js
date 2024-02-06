import '../css/Nav.css';
import Dropdown from './Dropdown';
import DropdownElements from './DropdownElements.js';
import NavButton from './NavButton.js';
import React, { useState, useEffect } from 'react';

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
import donna from '../images/donna.png'
import link from '../images/linkdagarna.png'


function Nav({ setState, tabIndex }) {

    const dropdownItemsSektionen = [
        ["Styrelsen", "/page/styrelsen"],
        ["Miljö", "/page/miljo"],
        ["Dokument", "/page/dokument"],
        ["Protokoll", "/page/protokoll"]
      ];

    const dropdownItemsUtskott = [
      ["EventU", "/utskott/eventu"],
      ["Alumni", "/utskott/alumni", alumni],
      ["D-Group", "/utskott/dgroup", dgroup],
      ["DONNA", "/utskott/donna", donna],
      ["DEG", "/utskott/deg", deg],
      ["InfU", "/utskott/infu"],
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


    const [darkMode, setDarkMode] = useState(() => {
      const storedDarkMode = localStorage.getItem('isDarkMode');
      return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    });

    useEffect(() => {
      const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
      setDarkMode(isDarkMode);
      console.log('Retrieved from localStorage:', isDarkMode);
    }, []);
    
    useEffect(() => {
      console.log('Setting dark mode:', darkMode);
      localStorage.setItem('isDarkMode', JSON.stringify(darkMode));
      const root = document.documentElement;
      if (darkMode) {
        root.style.setProperty('--text-color', 'var(--text-color-dark)');
        root.style.setProperty('--bg-color', 'var(--bg-color-dark)');
        root.style.setProperty('--header-bg-color', 'var(--header-bg-color-dark)');
        root.style.setProperty('--navbar-bg-color', 'var(--navbar-bg-color-dark)');
        root.style.setProperty('--navbar-text-color', 'var(--navbar-text-color-dark)');
        root.style.setProperty('--footer-text-color', 'var(--footer-text-color-dark)');
        root.style.setProperty('--footer-bg-color', 'var(--footer-bg-color-dark)');
        root.style.setProperty('--widget-title-bg-color', 'var(--widget-title-bg-color-dark)');
        root.style.setProperty('--widget-title-border-color', 'var(--widget-title-border-color-dark)');
        root.style.setProperty('--display-light-logo', 'none');
        root.style.setProperty('--display-dark-logo', 'inline-block');
        root.style.setProperty('--button-bg-color', 'var(--button-bg-color-dark)');
        root.style.setProperty('--button-text-color', 'var(--button-text-color-dark)');
        root.style.setProperty('--navbar-dropdown-bg-color', 'var(--navbar-dropdown-bg-color-dark)');
        root.style.setProperty('--utskott-bg-color', 'var(--utskott-text-color-dark)');
        root.style.setProperty('--utskott-text-color', 'var(--utskott-bg-color-dark)');
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
        root.style.setProperty('--display-light-logo', 'inline-block');
        root.style.setProperty('--display-dark-logo', 'none');
        root.style.setProperty('--button-bg-color', 'var(--button-bg-color-light)');
        root.style.setProperty('--button-text-color', 'var(--button-text-color-light)');
        root.style.setProperty('--navbar-dropdown-bg-color', 'var(--navbar-dropdown-bg-color-light)');
        root.style.setProperty('--utskott-bg-color', 'var(--utskott-text-color-light)');
        root.style.setProperty('--utskott-text-color', 'var(--utskott-bg-color-light)');
      }
    }, [darkMode]);
      
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
        <button type="button" id="dmode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '!(D-mode)' : 'D-mode'}
      </button>
      </nav>
    );
}

export default Nav;