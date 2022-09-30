import '../css/Nav.css';

import { ReactComponent as Logo } from './svg/logo.inline.svg';

import {
    FiChevronDown,
    FiChevronRight,
    FiMenu,
    FiSearch,
    FiUser,
} from 'react-icons/fi'

function Nav() {
    return (
        <nav className="Menu">
            <div className="Grid">
                <div className="Site-Logo-Wrapper">
                    <Logo className="Logo"/>
                </div>
                <ul className="Nav-Menu"></ul>
                <FiMenu className="Hamburger-Button" />
                <div className="Icon-Button">
                    <a href="https://medlem.d-sektionen.se">
                        <FiUser className="Member-Button"/>
                    </a>
                    <FiSearch className="Search-Button"/>
                </div>
            </div>
        </nav>
    );
}

export default Nav;