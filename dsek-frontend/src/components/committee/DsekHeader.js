import '../../css/committee/DsekHeader.css'

function DsekHeader() {
  return (
    <div className="D-Sek-Header">
        <img src={"logo.png"} className="D-Sek-Header-Logo-1"/>
        <p className="D-Sek-Header-Text-1">Denna sida är kopplad till d-sektionen.se</p>
        <img src={"webbu-logo.png"} className="D-Sek-Header-Logo-2"/>
        <p className="D-Sek-Header-Text-2">Utvecklad av</p>
    </div>
  );
}

export default DsekHeader;