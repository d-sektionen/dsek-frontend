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
            <div className='hamburger' onClick={handleClick}>
                <GiHamburgerMenu/>
            </div>
            <div style={{display:menuStyle}}>
                <Nav setState={handleClick}/>
            </div>
        </>
    );
}

export default NarrowNav;