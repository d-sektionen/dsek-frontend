import '../css/Nav.css';
import { useState } from 'react';
import Nav from './Nav.js';
import { GiHamburgerMenu } from 'react-icons/gi'

function NarrowNav() {
    const [ menuStyle, setMenuStyle ] = useState( 'none' )

    function handleClick() {
        if (menuStyle === 'none') {
            setMenuStyle('block');
        } else {
            setMenuStyle('none');
        }
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
