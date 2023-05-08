import { useEffect, useState } from "react";

import "../css/Header.css";
import Link from "./Link";
import Nav from "./Nav";
import NarrowNav from './NarrowNav';

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
                        <img src="https://d-sektionen.se/wp-content/uploads/2021/02/mobile-header-logo-2-contrast-2-tablet.png" alt=""
                            className="logo" />
                    </Link>
                </div>
                <NarrowNav />
            </header>
            <header className="wide-header">
                <div className={"logo-container" + (hideLogo ? " hidden" : "")}>
                    <Link to="/"> {/* Had style={{margin:"0",padding:"0",height:"0"}}. Is this needed? */}
                        <img src="https://d-sektionen.se/wp-content/uploads/2016/06/d-sektionen.jpg" alt="" className="logo" />
                    </Link>
                </div>
                <Nav />
            </header>
        </>
    );
}

export default Header;