import '../css/Nav.css';
import Nav from './Nav.js';
import { GiHamburgerMenu } from 'react-icons/gi'

function NarrowNav() {
    return (
        <>
            <div className='hamburger'>
                <GiHamburgerMenu/>
            </div>
            <Nav/>
        </>
    );
}

export default NarrowNav;