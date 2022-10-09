import '../../css/committee/PubU.css'
import DsekHeader from '../../components/committee/DsekHeader';

function PubU() {
    return (
        <>
            <DsekHeader/>
            <div className="PubU">
                <img src="https://d-sektionen.se/wp-content/uploads/2018/09/pubu-768x442.png" className="PubU-Img"/>
                <hr/>
                <p>
                    Pubutskottet har för uppgift att arrangera sektionspuben D-Pub som riktar sig mot sektionens medlemmar. 
                    På D-Pub kan du käka god mat över ett varierat utbud av öl, mingla med framtida arbetsgivare och öva på din favoritsport Dart. 
                    Pubarna hålls i Gasquen, Kårallen, en gång i månaden under läsperioderna. Information kring pubarna kommer ut i sektionens infomail 
                    och som event på <a href="">Facebook</a>.
                </p>
            </div>
        </>
    );
}
  
export default PubU;
  