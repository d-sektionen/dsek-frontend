import Link from '../Link';

function NavButton({ link, title }) {
    // En knapp som ligger i NavBar
    return (
        <Link to={link} className="nav-button reg-nav-button">
            {title}
        </Link>
    );
}

export default NavButton;