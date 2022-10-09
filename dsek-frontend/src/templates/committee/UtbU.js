import '../../css/committee/UtbU.css'

import ContactData from "../../fake-cms/contact.json"
import Contact from "../../components/committee/Contact";
import DsekHeader from '../../components/committee/DsekHeader';

function UtbU() {
    return (
        <>
            <DsekHeader/>
            <div className="UtbU">
                <h1>Utbildningsutskottet</h1>
                <p>
                    Utbildningsutskottet har i uppgift att bevaka utbildningen på våra program och är uppdelat i fyra mindre studienämnder, 
                    en för varje program. Utskottet ansvarar för att samla in kursutvärderingar. Dessutom arbetar utskottet med att utveckla 
                    kurser och se till att utbildningen håller högsta klass. Utskottets syfte är att tjäna som länk mellan studenter på programmet, 
                    Lintek och universitet. Denna text har som syfte att förklara vissa grundläggande begrepp och sammanhang när det gäller studiebevakning.
                </p>

                <h2>Kontaktuppgifter</h2>
                <hr/>
                {
                    ContactData.map((contactData) => contactData["Committee"] == "UtbU" ? 
                    <> {
                        contactData["People"].map((person) => <Contact name={person.Name} post={person.Post} mail={person.Mail}/>)
                    } </> : <></>)
                }

                <h2>Studentrådet</h2>
                <p>
                    Från och med verksamhetsåret 13/14 så har studienämnderna på D-sektionen genomgått en förändring för att hantera en större sektion. 
                    I Studentrådet sitter alla SnOrdfarna(Studienämndsordförande) samt Utbildningsutskottets Ordförande. Rådet finns där bland annat 
                    för att öka samarbetet mellan snordfarna och för att kunna diskutera större frågor som rör flera utbildningar.
                </p>

                <h2>Studienämnderna för D, IT, IP och U</h2>
                <p>
                    Studienämnden består av studenter som studerar på den utbildningen som studienämnden arbetar för. Det finns en studienämnd för varje 
                    utbildning. Det finns alltså en studienämnd för D, en studienämnd för IT, en studienämnd för IP och en studienämnd för U. Studentrådets 
                    Ordförande (SOrdf) sitter med i D-sektionens styrelse och väljs på sektionens vårmöte. Studienämnden D, IT, IP och U består av en SnOrdf 
                    (Studienämndsordförande) per program samt klassrepresentanter i årskurserna 1-3.
                </p>
                
                <h2>Programnämnden för data- och medieteknik (DM)</h2>
                <p>
                    Programnämnden ansvarar för att planera, följa upp och utvärdera de utbildningar den ansvarar för. De verkar även för ständiga 
                    kvalitetsförbättringar. Nämnden tar även fram utbildningsplaner, kursplaner, lässchema och tentamensschema. Det är även nämndens 
                    uppgift att besluta om tillgodo-räknande. Underlagen till det som beslutas i programnämnden arbetas fram i programplanegruppen 
                    (PPG/LoTTa för IT).
                </p>
                <p>
                    I programnämnden finns representanter för studenterna, institutionerna, yrkesrepresentanter, nämndordförande, nämndsekreterare, 
                    utbildningsledare samt studievägledare. Studenterna har tre ordinarie ledamöter i DM, 2 st SnOrdfar och LinTeks utbildningsansvarige. 
                    Eftersom studenterna har tre ledamöter med rösträtt finns stora möjligheter att påverka. Det skiljer sig dock sällan i röstningen i 
                    DM eftersom det oftast arbetas fram ett förslag i PPG som alla är nöjda med innan beslut tas i DM. Mer information om programnämnden 
                    finns här: 
                    <a>https://www.lith.liu.se/presentation/namnder/dm?l=sv</a>
                </p>

                <h2>Programplanegruppen (PPG)</h2>
                <p>
                    PPG är ett arbetsutskott under DM. Nästan alla frågor som ska behandlas i DM förbereds här. T.ex. diskuteras läro- och timplaner, kursplaner, 
                    budget, tentaperioder och alternativa examinationsformer. PPG träffas regelbundet, vanligen var annan vecka.
                    På IT kallas PPG för LoTTa, vilket är en förkortning av ”Läro- och timplanegruppen med terminsansvariga”. Där sitter IT-SnOrdfen, 
                    programansvarig, utbildningsledare, alla terminsansvariga samt MTS-ansvarig (MTS står för människa-teknik-samhälle).
                </p>

                <h2>Verkställande avdelningen</h2>
                <p>
                    VA består bl.a. av LinTeks utbildningsansvarige, som representerar studenterna, och DM:s ordförande som representant för universitetet. 
                    VA tar beslut i frågor gällande dispens från spärregler, godkännande av praktik och mindre beslut som inte kräver hela DM. VA tar även 
                    beslut i frågor som är brådskande och inte hinner tas upp i DM.
                </p>

                <h2>Utvärdering av kurser</h2>
                <p>
                    På D-sektionen håller alla studienämnder examinatorsmöten under samma vecka(eller två vid behov) och detta kallar vi för en utvärderingsperiod. 
                    En utvärderingsperiod äger rum efter varje läsperiod (4 gånger per år). Under denna vecka medverkar studenter som gått kurserna som ska 
                    utvärderas, examinatorer som håller i kursen och sedan SnOrdfarna som ska agera som medlare mellan studenterna och examinatorerna.
                    För att lösa problem som uppstår i början av en kurs kan man kontakta klassrepresentanter eller studienämndsordförande för sitt program. 
                    Dessa har även som uppgift att föra studenternas talan gentemot examinatorer och berörda parter mellan utvärderingsperioder. 
                    På så sätt kan man även påverka den aktuella utbildningssituationen och inte bara utvärdera en nästan slutförd kurs. Dessutom arbetas det 
                    just nu även med halvtidsutvärderingar inom flera kurser.
                    Alla utvärderingar finns på sektionens hemsida under respektive studienämnd.
                </p>
                <i>D, IP och U</i>
                <p>
                    I årskurserna 1-3 finns ett antal klassrepresentanter utspridda i klasserna. Det är i dagsläget två-tre från varje klass. De tar reda på 
                    vad andra i klassen tycker om kurserna och framför det på årskursrådet för sin årskurs och diskuterar åsikterna som kommer fram.
                </p>
                <i>IT</i>
                <p>
                    På IT diskuteras kursen först igenom på ett basgruppsmöte som finns i årskurserna 1-3. Sedan sammanställs åsikterna från varje basgrupp 
                    så att det går att framföra allas åsikter vid examinatorsmöten.
                </p>

                <h2>LinTeks Utbildningsråd (UR)</h2>
                <p>
                    Medlemmar i LinTeks Utbildningsråd är alla sektionernas studienämndsordföranden, utbildningsansvarig, vice kårordförande med 
                    internationaliseringsansvar, Norrköpingsansvarig samt kårordförande.
                    I UR diskuteras övergripande frågor och andra frågor som rör alla utbildningar. Där kan studienämnderna ta lärdom av varandras 
                    erfarenheter och dessutom få en möjlighet att driva en gemensam åsikt i bl.a. programnämnder.
                    Det är även UR som röstar om vem som ska tilldelas pedagogikpriset ”Gyllene Moroten”, vilket delas ut varje år av LinTek. 
                    Varje sektion nominerar en kandidat till årets mest pedagogiska undervisare.
                </p>
            </div>
        </>
    );
}
  
export default UtbU;
  