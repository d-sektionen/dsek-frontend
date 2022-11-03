import '../css/Header.css';
import Nav from './Nav';

function Header() {
    return (
        <>
            <header className="Header">
                <img src="https://d-sektionen.se/wp-content/uploads/2016/06/d-sektionen.jpg" className="Header-Img" alt=""></img>
                <Nav/>
            </header>
        </>
    );
}
  
export default Header;