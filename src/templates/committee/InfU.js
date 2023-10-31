import React, { useEffect, useState } from 'react';
import DsekHeader from '../../components/committee/DsekHeader';
import '../../css/committee/InfU.css';
import { getData } from '../../utils/NetFuncs';

function InfU() {
    const [ContactData, setContactData] = useState([]);
    useEffect(() => {
        (async () => { setContactData(await getData("contact")) })();
    }, []);
    return (
        <>
            <DsekHeader />
            <div className="Infu">
                <div className="Infu-Header" >
                    <img src={"infu-logo.png"} alt="" />
                </div>

                <h1>Infoutskottet</h1>
                <p className="Infu-Desc">
                    Infoutskottets uppgifter innefattar att se till att informationen på sektionens hemsida och sociala medier är uppdaterad och korrekt. 
                    Utskottet har även ansvar för sektionens infomail, julkalender, fotografering av sektionens medlemmar och evenemang, samt sidan som 
                    sektionen vissa år har haft i LinTeks tidning LiTHanian.
                </p>
                
                <p className="Infu-Desc">
                    Utskottet styrs av sektionens Infochef som du kan kontakta om du har funderingar gällande utskottets verksamhet, samt innehållet på 
                    hemsidan eller i våra sociala medier (<a href="https://www.facebook.com/datateknologsektionen/">Facebook</a>, <a href="https://www.instagram.com/dsektionen/">Instagram</a>).
                </p>
                <p className="Infu-Desc">
                    Infoutskottet finns till för alla våra medlemmar och alla våra utskott som vill marknadsföra sig via våra kanaler. Här är de områden 
                    vi arbetar med för tillfället:
                </p>


                <div className="Infu-Section">
                    <h2>Foto</h2>
                    <hr />
                    <p className="Infu-Text">
                        I Infoutskottet är vi hemskt intresserade av fotografering! Är du del av D-sektionen och skulle vilja få foton tagna från ett 
                        evenemang, vill ta gruppfoton eller dylikt?
                    </p>
                
                    <p>
                        Kontakta våra fotografer på <a href="mailto:foto@d-sektionen.se.">foto@d-sektionen.se.</a>
                    </p>
                </div>

                <div className="Infu-Section">
                    <h2>Instagram</h2>
                    <hr />
                    <p className="Infu-Text">
                        Infoutskottet hanterar sektionens Instagram-konto. Om du tillhör ett utskott som vill visa vad ni gör, eller bara är en sektionsmedlem 
                        som vill visa din tillvaro som student på D-sektionen, så är du varmt välkommen att ta över kontot under en kortare period 
                        (exempelvis en vecka) eller bara få ett enstaka inlägg publicerat.
                    </p>
                    <p>
                        Kontakta gruppens redaktörer/sociala medier-ansvariga på <a href="mailto:instagram@d-sektionen.se.">instagram@d-sektionen.se</a>
                    </p>
                </div>

                <div className="Infu-Section">
                    <h2>Julkalender</h2>
                    <hr />
                    <p className="Infu-Text">
                        Infogruppen har hand om sektionens årliga julkalender! Varje år samlar vi 24 bidrag från diverse grupper/utskott på sektionen 
                        (och ibland vissa från utanför sektionen!) i syfte att förgylla tillvaron för alla våra sektionsmedlemmar och skapa riktigt skön julstämning.
                    </p>
                    <p>
                        Är du intresserad av att veta mer om julkalendern? Kontakta <a href="mailto:julkalender@d-sektionen.se">julkalender@d-sektionen.se</a>
                    </p>
                </div>

                <div className="Infu-Section">
                    <h2>Tryck</h2>
                    <hr />
                    <p className="Infu-Text">
                        Via Infoutskottet kan du få hjälp med tryck. Har du ett evenemang på D-sektionen som du behöver få trycksaker till, eller andra typer av 
                        förfrågningar relaterade till tryck?
                    </p>
                    <p>
                        Kontakta utskottets tryckansvarig, tillika sektionens Art Director, på <a href="mailto:ad@d-sektionen.se.">ad@d-sektionen.se.</a>
                    </p>
                </div>

                <div className="Infu-Section">
                    <h2>Övrigt</h2>
                    <hr />
                    <p className="Infu-Text">
                        Om du har övriga, generella frågor om gruppen, eller tankar och idéer kring sektionens info, 
                        kontakta utskottets ordförande och tillika sektionens Infochef:
                    </p>
                    <p>
                        Är du intresserad av att veta mer om julkalendern? Kontakta <a href="mailto:julkalender@d-sektionen.se">julkalender@d-sektionen.se</a>
                    </p>
                </div>

                <div className='Infu-Footer'>
                    <p> V. A. Kant (InfUansvarig 23/24) </p>
                    <a href="mailto:info@d-sektionen.se"> info@d-sektionen.se </a>
                </div>
            </div>
        </>
    );
}

export default InfU;
