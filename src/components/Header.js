import { useEffect, useState } from "react";

import "../css/Header.css";
import Link from "./Link";
import NarrowNav from "./NavBar/NarrowNav";
import Nav from "./NavBar/Nav";

import logoWhite from "../images/logo_white.png";
import logoDark from "../images/logo_dark.png";

function Header() {
  const [hideLogo, setHideLogo] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 30) {
        setHideLogo(false);
      } else {
        setHideLogo(true);
      }
    });
  }, []);

  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
    setDarkMode(isDarkMode);
    console.log("Retrieved from localStorage:", isDarkMode);
  }, []);

  useEffect(() => {
    console.log("Setting dark mode:", darkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(darkMode));
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty("--text-color", "var(--text-color-dark)");
      root.style.setProperty("--bg-color", "var(--bg-color-dark)");
      root.style.setProperty(
        "--header-bg-color",
        "var(--header-bg-color-dark)",
      );
      root.style.setProperty(
        "--navbar-bg-color",
        "var(--navbar-bg-color-dark)",
      );
      root.style.setProperty(
        "--navbar-text-color",
        "var(--navbar-text-color-dark)",
      );
      root.style.setProperty(
        "--footer-text-color",
        "var(--footer-text-color-dark)",
      );
      root.style.setProperty(
        "--footer-bg-color",
        "var(--footer-bg-color-dark)",
      );
      root.style.setProperty(
        "--widget-title-bg-color",
        "var(--widget-title-bg-color-dark)",
      );
      root.style.setProperty(
        "--widget-title-border-color",
        "var(--widget-title-border-color-dark)",
      );
      root.style.setProperty("--display-light-logo", "none");
      root.style.setProperty("--display-dark-logo", "inline-block");
      root.style.setProperty(
        "--button-bg-color",
        "var(--button-bg-color-dark)",
      );
      root.style.setProperty(
        "--button-text-color",
        "var(--button-text-color-dark)",
      );
      root.style.setProperty(
        "--navbar-dropdown-bg-color",
        "var(--navbar-dropdown-bg-color-dark)",
      );
      root.style.setProperty(
        "--utskott-bg-color",
        "var(--utskott-text-color-dark)",
      );
      root.style.setProperty(
        "--utskott-text-color",
        "var(--utskott-bg-color-dark)",
      );
    } else {
      root.style.setProperty("--text-color", "var(--text-color-light)");
      root.style.setProperty("--bg-color", "var(--bg-color-light)");
      root.style.setProperty(
        "--header-bg-color",
        "var(--header-bg-color-light)",
      );
      root.style.setProperty(
        "--navbar-bg-color",
        "var(--navbar-bg-color-light)",
      );
      root.style.setProperty(
        "--navbar-text-color",
        "var(--navbar-text-color-light)",
      );
      root.style.setProperty(
        "--footer-text-color",
        "var(--footer-text-color-light)",
      );
      root.style.setProperty(
        "--footer-bg-color",
        "var(--footer-bg-color-light)",
      );
      root.style.setProperty(
        "--widget-title-bg-color",
        "var(--widget-title-bg-color-light)",
      );
      root.style.setProperty(
        "--widget-title-border-color",
        "var(--widget-title-border-color-light)",
      );
      root.style.setProperty("--display-light-logo", "inline-block");
      root.style.setProperty("--display-dark-logo", "none");
      root.style.setProperty(
        "--button-bg-color",
        "var(--button-bg-color-light)",
      );
      root.style.setProperty(
        "--button-text-color",
        "var(--button-text-color-light)",
      );
      root.style.setProperty(
        "--navbar-dropdown-bg-color",
        "var(--navbar-dropdown-bg-color-light)",
      );
      root.style.setProperty(
        "--utskott-bg-color",
        "var(--utskott-text-color-light)",
      );
      root.style.setProperty(
        "--utskott-text-color",
        "var(--utskott-bg-color-light)",
      );
    }
  }, [darkMode]);

  return (
    <>
      <header className="narrow-header">
        <button type="button" id="dmode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "!(D-mode)" : "D-mode"}
        </button>
        <div className={"logo-container" + (hideLogo ? " hidden" : "")}>
          <Link to="/">
            {" "}
            {/* Had style={{margin:"0",padding:"0",height:"0"}}. Is this needed? */}
            <img
              src={logoWhite}
              alt="D-sektionen"
              className="logo"
              id="logoWhite"
            />
            <img
              src={logoDark}
              alt="D-sektionen"
              className="logo"
              id="logoDark"
            />
          </Link>
        </div>
        <Nav />
        {/* <NarrowNav /> */}
      </header>
      <header className="wide-header">
        <button type="button" id="dmode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "!(D-mode)" : "D-mode"}
        </button>
        <div className={"logo-container" + (hideLogo ? " hidden" : "")}>
          <Link to="/">
            {" "}
            {/* Had style={{margin:"0",padding:"0",height:"0"}}. Is this needed? */}
            <img
              src={logoWhite}
              alt="D-sektionen"
              className="logo"
              id="logoWhite"
            />
            <img
              src={logoDark}
              alt="D-sektionen"
              className="logo"
              id="logoDark"
            />
          </Link>
        </div>
        <Nav />
      </header>
    </>
  );
}

export default Header;
