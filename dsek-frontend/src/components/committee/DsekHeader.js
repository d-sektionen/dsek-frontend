import '../../css/committee/DsekHeader.css';
import Link from '../Link';

function DsekHeader() {
    return (
        <div className="D-Sek-Header">
            <Link to="/">
                <img src={"logo.png"} className="D-Sek-Header-Logo-1" />
            </Link>
            <p className="D-Sek-Header-Text-1">Denna sida är kopplad till d-sektionen.se</p>
            <Link to="https://www.webbu.se/">
                <img src={"webbu-logo.png"} className="D-Sek-Header-Logo-2" />
            </Link>
            <p className="D-Sek-Header-Text-2">Utvecklad av</p>
        </div>
    );
}

export default DsekHeader;