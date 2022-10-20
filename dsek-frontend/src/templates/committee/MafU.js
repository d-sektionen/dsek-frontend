import '../../css/committee/MafU.css'
import DsekHeader from '../../components/committee/DsekHeader';

function MafU() {
    return (
        <>
            <DsekHeader/>
            <div className="MafU">
                <h1>Marknadsföringsutskottet</h1>
                <p className="MafU-Desc">
                    Marknadsföringsutskottet sysslar med marknadsföring av vår trevliga sektion. Utskottet har till huvuduppgift att göra reklam 
                    för sektionens utbildningar mot gymnasieelever och locka ännu fler att göra samma utmärkta val som alla dagens medlemmar redan 
                    har gjort: Läsa D, IP, IT eller U på LiTH.
                </p>

                <div className="MafU-Section">
                    <h2>Hemmissionering</h2>
                    <hr/>
                    <p className="MafU-Text">
                        Ett av sätten som vi marknadsför oss för gymnasieskolorna är att låta studerande åka till sin gamla gymnasieskola och prata med 
                        elever om hur bra vår sektion är och hur det är att plugga på D-sektionen på Linköpings universitet.
                        Ta även tillfället i akt och spendera lite tid hemma med familjen.
                        Du får hemresan betald, alternativt arvode på 600kr.
                        Vill du veta mer om hemmissioneringen klicka <a href="#" className="MafU-Link">HÄR</a>
                    </p>
                </div>

                <div className="MafU-Section">
                    <h2>Besöksdagar</h2>
                    <hr/>
                    <p className="MafU-Text">
                        Under året anordnas besöksdagar där gymnasieelever från alla möjliga ställen runt om i landet kommer till vårt universitet för att 
                        få möjligheten att få mer information om universitetets sektioner. Där står vi i MafU och representerar vår fantastiska sektion och 
                        gör allt vi kan för att få gymnasieelever att bli intresserade av att börja studera på vår sektion.
                        Vill du vara sektionens ansikte utåt och representera vår sektion? Se till att söka när ansökningsperioden öppnar, 
                        vilket brukar vara sent i vår eller tidigt på hösten!
                    </p>
                </div>

                <h1>Hemmissionering</h1>
                <p className="MafU-Text">
                    Nu kan vi i MafU glatt meddela att hemmissioneringen för läsåret 21/22 är i gång! Fram till och med 2022-02-25 kan bara digitala 
                    hemmissioneringar genomföras, och det är för nuvarande inte säkert att det kommer gå att hemmissionera på plats efter det heller. 
                </p>
                <p className="MafU-Text">
                    Precis som förra året får man 600kr per genomförd digital hemmissionering, men för hemmissionering på plats får man välja om man 
                    vill ha 600kr arvode eller sin resa betald (max 2000kr och ska göras med tåg 2:a klass och lokaltrafik). Om du tillfrågas av skolan 
                    du kontaktat att utföra flera presentationer ersätts varje ytterligare presentation med 1 timmes timersättning á 139,40 kr, vilket 
                    gäller både för IRL och digitala presentationer. Observera dock att även dessa ska hållas för en större grupp elever, till exempel 
                    en annan klass samt vara godkända av TFK innan hemmissioneringen genomförs. 
                </p>
                <p className="MafU-Small">
                    Ansök om att hemmissionera i följande <a href="#" className="MafU-Link">formulär</a>
                </p>
                <p className="MafU-Text">
                    Att hemmissionera innebär att du tar kontakt med din gamla gymnasieskola och inför en klass eller större grupp elever pratar om hur 
                    det är att studera vid Linköpings Universitet. Du kan prata lite om universitetet och din utbildning, men fokus bör ligga på hur 
                    det är att plugga här på LiU. Prata om det du tycker är roligt! Du kan exempelvis berätta om studentlivet och vad du gillar med att plugga här. 
                </p>
                <p className="MafU-Text">
                    Ren information kan de lätt hitta på andra håll, det som de vill höra från dig är saker som de flesta tänker på om de ska börja plugga. 
                    Kommer jag skaffa några vänner? Hur löser det sig med boende? Händer det något roligt? 
                </p>
                <p className="MafU-Text">
                    Presentationen förväntas vara ca 20 minuter lång, men får gärna vara längre. Efter presentationen ska du också finnas tillgänglig för 
                    eventuella frågor som eleverna vill ställa. 
                </p>
                <p className="MafU-Text">
                    Du väljer själv när du vill hemmissionera, men presentationer inför åk 3 kan göras till och med 15 april och inför åk 2 till och med 13 maj. 
                </p>
                <p className="MafU-Small">
                    Mer information och en steg för steg guide om hur du hemmissionerar finns <a href="lith.liu.se/samverkan/hemmissionering" className="MafU-Link">HÄR</a>
                </p>
                <p className="MafU-Text">
                    Material till hemmissionering <a href="#" className="MafU-Link">Powerpoint-fil</a> för presentation<br/>
                    <a href="#" className="MafU-Link">Checklista</a> inför digital hemmissionering.<br/>
                    Vid frågor maila MafU på henrik.thoren@d-sektionen.se <br/>
                    Taggad? Intresseanmäl dig då <a href="#" className="MafU-Link">HÄR</a> för att hemmissionera.
                </p>
            </div>
        </>
    );
}
  
export default MafU;
  