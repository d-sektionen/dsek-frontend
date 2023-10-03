import Widget from '../components/Widget.js';

export default function Sponsors() {
    return (
        <div className="Right">
            <Widget title="Samarbetspartners" content={[["ITEA Pro", "../ITEA-Pro-1.png", "https://www.iteapro.se/"], ["SECTRA", "../sectra.png", "https://www.sectra.com/jobs"], ["ProfilPartner", "../profilpartner_logo.jpg", "https://www.profilpartner.se/"]]} />
            <Widget title="I stolt samarbete med" content={[["LinTek", "../lt_logga.png", "https://lintek.liu.se/"]]} />
            <Widget title="Vi är stolta över att vara" content={[["Grön sektion", "../gron_sektion.png", "https://www.student.liu.se/vid-sidan-av-studierna/studentorganisationer/gronasektioner?l=sv"]]} />
        </div>
    )
}