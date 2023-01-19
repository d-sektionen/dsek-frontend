import { useEffect, useState } from 'react';
import '../css/Header.css';
import Nav from './Nav';

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
            <header className="Header wide">
                <div style={{height: logoHeight.toString()+"px", transition:"0.3s"} }>
                    <a href="/" style={{margin:"0",padding:"0",height:"0"}}>
                        <img src="https://d-sektionen.se/wp-content/uploads/2016/06/d-sektionen.jpg" 
                        style={{opacity: (logoHeight==0)? "0":"1" ,left:(logoHeight==0)?"50%":"calc(50% - 161px)"}}
                        className="Header-Img" alt=""></img>
                    </a>
                </div>
                <Nav/>
            </header>
            <header className="Header narrow">
                <div style={{height: logoHeight.toString()+"px", transition:"0.3s"} }>
                    <a href="/" style={{margin:"0",padding:"0",height:"0"}}>
                        <img src="https://d-sektionen.se/wp-content/uploads/2016/06/d-sektionen.jpg" 
                        style={{opacity: (logoHeight==0)? "0":"1" ,left:(logoHeight==0)?"50%":"calc(50% - 161px)"}}
                        className="Header-Img" alt=""></img>
                    </a>
                </div>
                <Nav/>
            </header>
        </>
    );
}
  
export default Header;