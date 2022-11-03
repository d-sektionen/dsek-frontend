import '../../css/committee/UtbU.css'

import Contact from "../../components/committee/Contact";
import DsekHeader from '../../components/committee/DsekHeader';
import {getData} from '../../utils/NetFuncs';
import React, { useState, useEffect } from 'react';

function UtbU() {
    const [ContactData, setContactData] = useState([]);
    useEffect(() => {
        (async () => { setContactData( await getData("contact")) })();
    }, []);

    return (
        <>
            <DsekHeader/>
            <div className="UtbU">
                <img src={"utbu-logo.png"} className="UtbU-Img"/>
                <h1>Utbildningsutskottet</h1>
                <p className="UtbU-Desc">
                    Utbildningsutskottet har i uppgift att bevaka utbildningen på våra program och är uppdelat i fyra mindre studienämnder, 
                    en för varje program. Utskottet ansvarar för att samla in kursutvärderingar. Dessutom arbetar utskottet med att utveckla 
                    kurser och se till att utbildningen håller högsta klass. Utskottets syfte är att tjäna som länk mellan studenter på programmet, 
                    Lintek och universitet. Denna text har som syfte att förklara vissa grundläggande begrepp och sammanhang när det gäller studiebevakning.
                </p>

                <div className="UtbU-Section">
                    <h2>Kontaktuppgifter</h2>
                    <hr/>
                    {
                        ContactData.map((contactData) => contactData["Committee"] == "UtbU" ? 
                        <> {
                            contactData["People"].map((person) => <Contact name={person.Name} post={person.Post} mail={person.Mail}/>)
                        } </> : <></>)
                    }
                </div>

                <div className="UtbU-Section">
                    <h2>Poster inom utskottet</h2>
                    <hr/>
                    <p className="Alumni-Section-Text">
                        Utbildningsutskottets Ordförande sitter med i D-sektionens styrelse och väljs på sektionens vintermöte. 
                        Studienämnderna för D, IT, IP, U och Master består av en SnOrdf (Studienämndsordförande) per program som väljs in på sektionens 
                        vårmöte samt klassrepresentanter som rekryteras av respektive SnOrdf.
                    </p>
                </div>

                <div className="UtbU-Section">
                    <h2>Programnämnden för data- och medieteknik (DM)</h2>
                    <hr/>
                    <p className="Alumni-Section-Text">
                        Programnämnden ansvarar för att planera, följa upp och utvärdera de utbildningar den ansvarar för. 
                        De verkar även för ständiga kvalitetsförbättringar. Nämnden tar även fram utbildningsplaner, kursplaner, lässchema och tentamensschema. 
                        Underlagen till det som beslutas i programnämnden arbetas fram i programplanegruppen (PPG/LoTTa för IT). 
                        I programnämnden finns representanter för studenterna, institutionerna, yrkesrepresentanter, nämndordförande, nämndsekreterare, 
                        utbildningsledare samt studievägledare. Studenterna har tre ordinarie ledamöter i DM, två SnOrdfar och LinTeks utbildningsansvarige. 
                        Eftersom studenterna har tre ledamöter med rösträtt finns stora möjligheter att påverka. Det skiljer sig dock sällan i röstningen i 
                        DM eftersom det oftast arbetas fram ett förslag i PPG som alla är nöjda med innan beslut tas i DM. Mer information om programnämnden 
                        finns <a href="https://liu.se/organisation/liu/lith/programnamnden-for-data-och-medieteknik" className="UtbU-Link">HÄR</a>
                    </p>
                </div>

                <div className="UtbU-Section">
                    <h2>Programplanegruppen (PPG)</h2>
                    <hr/>
                    <p className="Alumni-Section-Text">
                        PPG är ett arbetsutskott under DM. Nästan alla frågor som ska behandlas i DM förbereds här. 
                        I PPG diskuteras framförallt kursplaner, programplaner, utbildningsplaner, och kvalitetsarbete (tex kursutvärderingar). 
                        I detta ingår både långsiktigt arbete med programmets inriktning och profil, samt mer dagsaktuella frågor som problem eller 
                        utvecklingsmöjligheter för enskilda kurser. PPG träffas regelbundet, vanligen ett par gånger per termin.
                        Det finns tre PPG:er som rör D-sektionen. PPG-D/U/CS, PPG-IT, PPG-IP. 
                    </p>
                </div>

                <div className="UtbU-Section">
                    <h2>LinTeks Utbildningsråd (UR)</h2>
                    <hr/>
                    <p className="Alumni-Section-Text">
                        Medlemmar i LinTeks Utbildningsråd är alla sektionernas studienämndsordföranden, utbildningsansvarig, 
                        vice kårordförande med internationaliseringsansvar, Norrköpingsansvarig samt kårordförande.
                        I UR diskuteras övergripande frågor och andra frågor som rör alla utbildningar. Där kan studienämnderna ta lärdom av varandras 
                        erfarenheter och dessutom få en möjlighet att driva en gemensam åsikt i bl.a. programnämnder.
                        Det är även UR som röstar om vem som ska tilldelas pedagogikpriset ”Gyllene Moroten”, vilket delas ut varje år av LinTek. 
                        Varje sektion nominerar en kandidat till årets mest pedagogiska undervisare.
                    </p>
                </div>

                <div className="UtbU-Section">
                    <h2>Utvärdering av kurser</h2>
                    <hr/>
                    <p className="Alumni-Section-Text">
                        I slutet av varje studieperiod håller klassrepresentanterna i utvärderingsmöten där de tillsammans med sina klasser diskuterar vad som 
                        varit bra och dåligt med kurserna de läst. Klassrepresentaterna sammanfattar sedan studenternas åsikter i ett utvärderingsformulär. 
                        Till sist går representanten på ett möte med examinatorn där de diskuterar utvärderingen och examinatorn får chans att kommentera 
                        innehållet. 
                    </p>
                </div>
            </div>
        </>
    );
}
  
export default UtbU;
  