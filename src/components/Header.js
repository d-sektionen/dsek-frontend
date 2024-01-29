import { useEffect, useState } from "react";

import "../css/Header.css";
import Link from "./Link";
import NarrowNav from './NavBar/NarrowNav';
import Nav from "./NavBar/Nav";

function Header() {
    const [logoUrl, setLogoUrl] = useState("../logo_white.png");
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
                        <img src="../logo_black.png" alt="Datateknologsektionen"
                            className="logo" />
                    </Link>
                </div>
                <Nav />
                {/* <NarrowNav /> */}
            </header>
            <header className="wide-header">
                <div className={"logo-container" + (hideLogo ? " hidden" : "")}>
                    <Link to="/"> {/* Had style={{margin:"0",padding:"0",height:"0"}}. Is this needed? */}
                    <img src={logoUrl} alt="Datateknologsektionen" className="logo" />
                    </Link>
                </div>
                <Nav />
            </header>
        </>
    );
}

export default Header;