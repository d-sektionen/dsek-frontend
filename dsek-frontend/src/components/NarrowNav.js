import '../css/Nav.css';
import { useState } from 'react';
import Nav from './Nav.js';
import { GiHamburgerMenu } from 'react-icons/gi'

function NarrowNav() {
    const [ display, setDisplay ] = useState( 'none' )

    function handleClick() {
        if (display === 'none') {
            setDisplay( 'block' );
        } else {
            setDisplay( 'none' );
        }
    }

    return (
        <>
            <div className='hamburger' onClick={handleClick}>
                <GiHamburgerMenu/>
            </div>
            <div style={{display:display}}>
                <Nav/>
            </div>
        </>
    );
}

export default NarrowNav;