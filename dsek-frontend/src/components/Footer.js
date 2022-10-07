import '../css/Footer.css';

function Footer() {
    return (
        <footer className="Footer">
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
                    <p><b>E-post:</b> webmaster@d-sektionen.se</p>
                </div>
            </div>
        </footer>
    );
}
  
export default Footer;