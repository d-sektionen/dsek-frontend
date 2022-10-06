import '../css/Nav.css';
import NavButton from './NavButton.js';

function Nav() {
    return (
        <nav className="Menu">
            <NavButton title="Sektionen" link="https://google.com"/>
            <NavButton title="Utskott" link="https://google.com"/>
            <NavButton title="Sökande" link="https://google.com"/>
            <NavButton title="Alumni-blogg" link="https://google.com"/>
            <NavButton title="Exjobb" link="https://google.com"/>
            <NavButton title="Företag" link="https://google.com"/>
            <NavButton title="Medlemstjänster" link="https://google.com"/>
            <NavButton title="Test" link="https://google.com"/>
        </nav>
    );
}

export default Nav;