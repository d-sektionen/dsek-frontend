import Link from './Link';
import { useEffect, useState } from 'react';
import '../css/Header.css';
import Nav from './Nav';
import NarrowNav from './NarrowNav';

function Header() {

    const [logoHeight, setLogoHeight] = useState(70);

    useEffect(() => {
        window.addEventListener(("scroll"), () => {
            if (window.scrollY < 30) {
                setLogoHeight(70);
            } else {
                setLogoHeight(0);
            }
        });
    }, []);

    return (
        <>
            <header className="Header">
                <div className='narrow-header'>
                    <div style={{height: "45px", transition:"none"} }>
                        <Link to="/" style={{margin:"0",padding:"0",height:"0"}}>
                            <img src="https://d-sektionen.se/wp-content/uploads/2021/02/mobile-header-logo-2-contrast-2-tablet.png" 
                            className="Header-Img" alt=""></img>
                        </Link>
                    </div>
                    <NarrowNav/>
                </div>
                <div className='wide-header'>
                    <div style={{height: logoHeight.toString()+"px", transition:"0.3s"} }>
                        <Link to="/" style={{margin:"0",padding:"0",height:"0"}}>
                            <img src="https://d-sektionen.se/wp-content/uploads/2016/06/d-sektionen.jpg" 
                            style={{opacity: (logoHeight===0)? "0":"1" ,left:(logoHeight===0)?"50%":"calc(50% - 161px)"}}
                            className="Header-Img" alt=""></img>
                        </Link>
                    </div>
                    <Nav/>
                </div>
            </header>
        </>
    );
}
  
export default Header;