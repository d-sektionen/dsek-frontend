import Widget from '../components/Widget.js';

export default function Sponsors() {
    return(
        <div className="Right">
            <Widget title="Huvudsponsor" content={[[1, "../ericsson.png", "http://www.ericsson.com/careers"]]}/>
            <Widget title="Samarbetspartners" content={[[1, "../ITEA-Pro-1.png", "https://www.iteapro.se/"], [1, "../sectra.png", "https://www.sectra.com/jobs"], [1, "../profilpartner_logo.jpg", "https://www.profilpartner.se/"]]}/>
            <Widget title="I stolt samarbete med" content={[[1, "../lt_logga.png", "https://lintek.liu.se/"]]}/>
            <Widget title="Vi är stolta över att vara" content={[[1, "../gron_sektion.png", "https://www.student.liu.se/vid-sidan-av-studierna/studentorganisationer/gronasektioner?l=sv"]]}/>
        </div>
    )
}