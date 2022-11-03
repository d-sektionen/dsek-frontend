import '../../css/committee/NarU.css'
import DsekHeader from '../../components/committee/DsekHeader';

function NarU() {
    return (
        <>
            <DsekHeader/>
            <div className="NarU">
                <div className="NarU-Header" >
                    <img src={"naru-logo.png"} alt=""/>
                </div>

                <h1>Näringslivsutskottet</h1>
                <p className="NarU-Desc">
                    Näringslivsutskottets främsta uppgift är att sköta kontakten och samarbetet mellan sektionen och näringslivet. 
                    Det är vi som ansvarar för att vårda och utveckla kontakten mellan studenterna på sektionen mot vår huvudsponsor 
                    och samarbetspartners.
                </p>

                <div className="NarU-Section"> 
                    <h2>Företag?</h2>
                    <hr/>
                    <p className="NarU-Text">Information för företag och organisationer finner ni under fliken <a href="https://d-sektionen.se/foretag/" className="NarU-Link">Företag</a>. </p>
                </div>

                <div className="NarU-Section">
                    <h2>Företagskvällar och företagsluncher</h2>
                    <hr/>
                    <p className="NarU-Text">
                        För att du som D-student ska få en nära kontakt med näringslivet anordnar vi i Näringslivsutskottet ett antal 
                        företagskvällar och företagsluncher under året. Företagskvällarna och företagsluncherna hålls i syfte att ge dig 
                        som student en inblick i näringslivet och möjlighet att knyta värdefulla kontakter inför det framtida arbetslivet. 
                        Företagskvällar och företagsluncher börjar vanligtvis med att det besökande företaget håller en kort presentation för 
                        att sedan övergå till mingel med något ät- och drickbart.
                    </p>
                </div>

                <div className="NarU-Section">
                    <h2>Annonsering</h2>
                    <hr/>
                    <p className="NarU-Text">
                        Vi i Näringslivsutskottet arbetar för att sprida information om lediga jobb, ex-jobb och företag till sektionens medlemmar. 
                        Håll utkik på hemsidan, i sektionens info-mejl och i sektionsrummen där vi kontinuerligt annonserar och sprider den senaste informationen.
                        Vi annonserar även på vår <a href="https://www.facebook.com/datateknologsektionen" className="NarU-Link">Facebook-sida</a>, gilla den för att ta del av allt spännande som händer.
                    </p>
                </div>

                <div className="NarU-Section">
                    <h2>Hjälp oss</h2>
                    <hr/>
                    <p className="NarU-Text">Vi arbetar kontinuerligt med att förbättra sektionens näringslivsverksamhet och är därför i ett stort behov av dina idéer och åsikter.</p>
                    <ul className="NarU-List">
                        <li>Har du som student egna önskemål på företag som du vill träffa på en företagskväll eller företagslunch?</li>
                        <li>Har du kontakt med företag som är intresserade av Datateknologsektionen och kan vara intresserade av att samarbeta med oss?</li>
                        <li>Har du tips eller idéer på hur vi kan förbättra vår verksamhet?</li>
                    </ul>
                    <p className="NarU-Text">Mejla förslag och tips till Näringslivsansvarig.</p>
                </div>

                <div className='NarU-Footer'>
                <p> Thea Antonsson (Näringslivsansvarig 22/23) </p>
                <a href="mailto:nara@d-sektionen.se"> nara@d-sektionen.se </a>
                </div>

            </div>

            {/* Max & Jessica was here*/}
        </>
    );
}
  
export default NarU;
  