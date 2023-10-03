import { FaFacebook, FaGithub, FaLinkedin, FaReddit } from 'react-icons/fa';
import '../css/Footer.css';
import '../css/committee/Group.css';
import SideNav from './SideNav';
import Sponsors from './Sponsors';


function Footer() {
    return (
        <footer className="Footer">
            <div className='narrow'>
                <SideNav />
                <Sponsors />
            </div>


            <div className="Colors">
                <div className="Color-1"></div>
                <div className="Color-2"></div>
                <div className="Color-3"></div>
                <div className="Color-4"></div>
                <div className="Color-5"></div>
            </div>
            <div className="Footer-Content">
                <div className="Footer-Info">
                    <p><b>Postadress:</b> Datateknologsektionen, Kårallen, Universitetet, 581 83 Linköping</p>
                    <p><b>Organisationsnr:</b> 822002-1409 <b>Bankgironr:</b> 5644-8251</p>
                    <p><b>E-post:</b> <a href="mailto:webmaster@d-sektionen.se"> webmaster@d-sektionen.se </a> </p>
                    <p className='Icons'><b><a aria-label='Facebook' className="Icons" href="https://www.facebook.com/datateknologsektionen"> <FaFacebook /> </a></b>
                        <b><a aria-label="LinkedIn" className="Icons" href="https://www.linkedin.com/company/datateknologsektionen"> <FaLinkedin /> </a></b>
                        <b><a aria-label='GitHub' className="Icons" href="https://github.com/d-sektionen"> <FaGithub /> </a></b>
                        <b><a aria-label='Reddit' className="Icons" href="https://www.reddit.com/r/linkopinguniversity"> <FaReddit /> </a></b>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;