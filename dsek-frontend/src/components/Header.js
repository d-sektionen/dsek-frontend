import { useEffect, useState } from 'react';
import '../css/Header.css';
import Nav from './Nav';

function Header() {

    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        window.addEventListener(("scroll"), () => {
            if (window.scrollY < 30) {
                setShowLogo(true);
            } else {
                setShowLogo(false);
            }
        });
    }, []);

    return (
        <>
            <header className="Header">
                {showLogo && (
                <img src="https://d-sektionen.se/wp-content/uploads/2016/06/d-sektionen.jpg" className="Header-Img" alt=""></img>
                )}
                <Nav/>
            </header>
        </>
    );
}
  
export default Header;