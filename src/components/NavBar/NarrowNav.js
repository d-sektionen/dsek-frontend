import '../../css/Nav.css';
import { useState } from 'react';
import Nav from './Nav.js';
import { GiHamburgerMenu } from 'react-icons/gi'

function NarrowNav() {
    // konstruerar och returnerar en NavBar för smala skärmar
    // (som också funkar bättre med touch-skärmar)
    const [ menuStyle, setMenuStyle ] = useState( 'none' )

    function handleClick() {
        setMenuStyle(menuStyle === "block" ?  "none" : "block")
    }

    return (
        <>
            <div className='hamburger' tabIndex="0" onClick={handleClick}>
                <GiHamburgerMenu/>
            </div>
            <div className="narrow-nav-menu" style={{display:menuStyle}}>
                <Nav setState={handleClick}/>
            </div>
        </>
    );
}

export default NarrowNav;
