import { useEffect, useState } from "react";

import "../css/Header.css";
import Link from "./Link";
import NarrowNav from './NarrowNav';
import Nav from "./Nav";

import logoWhite from "../images/logo_white.png";
import logoDark from "../images/logo_dark.png";

function Header() {
    const [hideLogo, setHideLogo] = useState(false);

    useEffect(() => {
        window.addEventListener(("scroll"), () => {
            if (window.scrollY < 30) {
                setHideLogo(false);
            } else {
                setHideLogo(true);
            }
        });
    }, []);

    return (
        <>
            <header className="narrow-header">
                <div className="logo-container">
                    <Link to="/"> {/* Had style={{margin:"0",padding:"0",height:"0"}}. Is this needed? */}
                        <img src={logoWhite} alt="D-sektionens"className="logo" />
                        <img src={logoDark} alt="D-sektionens"className="logo" />
                    </Link>
                </div>
                <NarrowNav />
            </header>
            <header className="wide-header">
                    <div className={"logo-container" + (hideLogo ? " hidden" : "")}>
                        <Link to="/"> {/* Had style={{margin:"0",padding:"0",height:"0"}}. Is this needed? */}
                            <img src={logoWhite} alt="D-sektionen"  className="logo" id="logoWhite" />
                            <img src={logoDark} alt="D-sektionen" className="logo" id="logoDark" />
                        </Link>
                    </div>
                <Nav />
            </header>
        </>
    );
}

export default Header;