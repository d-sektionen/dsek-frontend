import '../css/Footer.css';
import { FiMoreHorizontal, FiFacebook, FiInstagram } from 'react-icons/fi'

function Footer() {
    return (
        <footer className="Footer">
        <div className="Social-Icons">
          <a href="https://www.facebook.com/datateknologsektionen">
            <FiFacebook />
          </a>
          <a href="https://instagram.com/dsektionen">
            <FiInstagram />
          </a>
          <a href="/socialamedier">
            <FiMoreHorizontal />
          </a>
        </div>
        <div className="Footer-Content">
          <div className="Logo">
            <img src={"/logo.png"} alt="D-sektionen" />
            Datateknologsektionen, Kårallen, Universitetet, 581&nbsp;83&nbsp;Linköping
          </div>
          <div className="Links">
            <a href="#">Kontakt</a>
            <a href="#">Sektionsinfo</a>
            <a href="#">Personuppgiftshantering</a>
          </div>
        </div>
      </footer>
    );
}
  
export default Footer;