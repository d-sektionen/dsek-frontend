import '../../css/committee/Werk.css'
import DsekHeader from "../../components/committee/DsekHeader";
import FAQ from "../../components/committee/FAQ";
import ImgObj from "../../components/committee/ImgObj";
import Contact from "../../components/committee/Contact";
import ContactData from "../../fake-cms/contact.json"

function Werk() {
    return (
        <>
            <DsekHeader/>
            <div className="Werk">
                <hr/>
                <h1 className="Werk-Title">Werkmästeriet</h1>
                <p className="Werk-Tagline">Werkmästeriet är oljan i kugghjulen, vallan på skidorna, dippen till pommetallriken och skumkronan på ölen.</p>
                <hr/>
                <p className="Werk-Description">
                    Werkmästeriets uppgift är att sköta om sektionens lokaler, inventarier och fordon, 
                    så utskottens arbete kan utföras på ett effektivt, strukturerat och trevligt sätt.
                </p>
                <ul>
                    <p>Några exempel på vad Werkmästeriet gjort under åren är:</p>
                    <li className="odd">Uppdaterat städrutiner för sektionsrummen, finns på dörrarna</li>
                    <li className="even">Att det alltid ska finnas gratis kaffe för sektionsmedlemmar i Netlight</li>
                    <li className="odd">Sålt åvvar</li>
                    <li className="even">Hanterat praktikalia på sektionsmöten</li>
                    <li className="odd">Uppdaterat Bilformuläret för milloggning</li>
                    <li className="even">Renoverat sektionsrummet Netlight.</li>
                    <li className="odd">Renoverat sektionskontoret Configura, Tillsammans med Styrelsen och Configuras studentrepresentanter</li>
                    <li className="even">Uppgraderat datorsystemet i sektionskontoret Configura</li>
                    <li className="odd">Möjliggjort för medlemmar att ta sig in i sektionsrummet Netlight via sektionshemsidan</li>
                    <li className="even">Köpt in nya verktyg till sektionen, samt en vagn för transporter till och från B23</li>
                    <li className="odd">Flyttat sektionsförråd från A15 till B23</li>
                    <li className="even">Byggt en ny övervåning i Gula Ladan på VTI (höll tidigare)</li>
                </ul>
                <p className="Werk-Description">
                    Utöver de ovan nämnda projekten och de dagliga rutinerna, som till exempel att boka salar, låna ut nycklar, Utöver de ovan nämnda projekten och de dagliga rutinerna, som till exempel att boka salar, låna ut nycklar, laga bilen och köpa kontorsvaror, driver Werkmästeriet en hel drös mindre projekt, som diverse lagning och städning.
                    laga bilen och köpa kontorsvaror, driver Werkmästeriet en hel drös mindre projekt, som diverse lagning och städning.
                </p>

                <h2>FAQ</h2>
                <hr/>
                <FAQ question="Vem har bokat bilen klockan X?" answer="Se bokningssidan."/>
                <FAQ question="Får vi lämna saker i Configura?" answer="Endast under korta perioder, fråga ReningsWerk först och ställ sakerna bakom skynket så de kommer undan. Kom ihåg att B23 finns."/>
                <FAQ question="Jag har inga nycklar till Configura men vill lämna tillbaka nycklar, hur gör jag?" answer="Kontakta någon i ditt utskott som har nyckel, alternativt kontakta vederbörande werkare (VägWerk/KraftWerk) eller Intendenten för att komma in."/>
                <FAQ question="Kan vi sätta loggor och flames på bilen?" answer="Nej. För utförligare svar: prata med Intendenten"/>
                <FAQ question="Vi behöver komma åt VTI men grinden är stängd, hur kommer vi in?" answer="Bilgrinden på VTI är öppen vardagar 07:00-17:00. Vi har ingen möjlighet att låsa upp den på andra tider, men gånggrinden går att låsa upp."/>
                <FAQ question="Finns det kaffe i Netlight?" answer="Kanske, du får kolla. Annars är det bara att brygga på. Kolla in kaffeguiden om du känner dig osäker. Glöm inte att skriva upp på tavlan när kaffet är bryggt."/>
                <FAQ question="Hur loggar jag min bilkörning?" answer="Länk till bilformulär."/>

                <h2>Sektionsrummen</h2>
                <hr/>
                <p>
                    D-sektionen har två sektionsrum, Configura och Netlight. Dessa ligger i Kårallen på nedervåningen.
                    Sektionsrummen är inga förråd, speciellt inte om man inte kontaktar ReningsWerk innan.
                </p>
                <h3>Configura</h3>
                <p>
                    Configura är sektionens kontor, där sektionsaktiva kan utföra sitt arbete. Här finns nycklar till sektionens olika resurser.
                </p>
                <h3>Netlight</h3>
                <p>
                    Netlight är sektionens uppehållsrum, dit man kan komma till exempel för att fördriva lite tid, eller kanske till och med plugga. 
                    Alla sektionens medlemmar kan komma in i Netlight när Kårallen är öppet. Rummet kan enkelt låsas och låsas upp via medlemsportalen.
                </p>

                <h2>Bilen</h2>
                <hr/>
                <p>
                    Sektionsbilen är en manuell Kia C’eed ’14 utrustad med dragkrok. Släpvagn, spännband och cykelhållare finns även att tillgå. 
                    Mer info finns i bilavtalet och i handskfacket i bilen. Glöm inte att alla som kör bilen måste logga sin körning.
                </p>

                <h2>Våra Förråd</h2>
                <hr/>
                <h3>B23</h3>
                <p>
                    B23 ligger i B-husets källare, ingång 23. Där kan alla sektionens utskott få förvara begränsade mängder saker. B23 är vårt mest centrala och 
                    attraktiva förråd och bör därför inte fyllas upp med skrymmande saker som används sällan.
                    För att komma in i B23-källaren behöver man blippa sitt LiU-kort. Kontakta sektionskassören om du vill ha tillgång till B23-källaren med 
                    ditt LiU-kort.
                </p>

                <h3>Pappers-Pappers</h3>
                <p>
                    På Rydsvägen 278 ligger Pappers. Pappers är egentligen 4 förråd: STABEN-Pappers, D-Group-Pappers, Toalett-Pappers samt Pappers-Pappers. 
                    Namnen härleder vad förråden används till. D-group och STABEN har sina förråd och sektionen delar sedan på Toalett-Pappers och Pappers-Pappers. 
                    Toalett-Pappers används för att förvara större mängder av förbrukningsmaterial samt ovvar, medans Pappers-Pappers används som arkiv.
                </p>

                <h3>Gula Ladan</h3>
                <p>
                    Gula Ladan (ofta slarvigt kallat för ‘VTI’) är ett gult hus på VTI (som ligger på andra sidan vägen vid infarten till Mjärdevi). 
                    Bilgrinden till VTI är öppen på vardagar under de tider som står på skylten. Ibland står grinden öppen även senare, vilket INTE 
                    betyder att det är ok att köra in och ställa sig; då blir eventuellt bilen inlåst på området (gånggrinden har vi nyckel till, 
                    men inte bilgrinden). I Gula Ladan förvarar vi oömma saker, skrymmande saker, samt saker som kan skada andra saker (t.ex. skitiga eller 
                    kladdiga grejjer). Exempel på innehåll i Gula Ladan är: färg, extrahjul till bil och släp, spik, kvastar och rep. Sedan förr finns även 
                    en rejält stadig övervåning på förrådet, och en “stege” för att ta sig upp dit.
                </p>

                <h2>Våra verktyg</h2>
                <hr/>
                <p>
                    D-sektionen har sedan förr en mycket kompetent uppsättning verktyg som utskotten kan låna. Fråga Werkmästeriet innan 
                    användning så ser vi till att werktygen lämnas ut på ett kontrollerat sätt. Undantaget är fraktvagnen som får nyttjas 
                    för transport men sedan ska återlämnas till B23 så snart som möjligt. Följande verktyg och redskap finns att tillgå 
                </p>

                <ImgObj title="(2018):" img="https://d-sektionen.se/wp-content/uploads/2018/02/nya-Werktyg-207x300.jpg" description="På bilden: Fotpump, cykelverktygssats inklusive insexnyckelsats och kedjebrytare, bågfil, skruvdragare med bitshållare, bitsmejsel, 
                    bitssats, hammare, fil/rasp, kniv, skiftnyckel, plåtsax, insexnyckelsats, brytbladskniv, multimeter, hylsnyckelsats, meterstockar 
                    (1 resp 2 meter), gummiklubba, vattenpass, kabeltång, borrsats, spännband, limpistol, limpatroner."/>

                <p>
                    Utanför bilden finns även en såg, en hopfällbar fraktvagn som klarar 150kg, lödningskit (bokas av werk), tillbehör till skruvdragaren 
                    samt diverse bilvertyg (i bilen). I förrådet i Gula Ladan finns även spik, skruv, beslag och liknande i stora mängder.
                </p>

                <h2>Kontaktuppgifter</h2>
                <hr/>
                {
                    ContactData.map((contactData) => contactData["Committee"] == "Werk" ? 
                    <> {
                        contactData["People"].map((person) => <Contact name={person.Name} post={person.Post} mail={person.Mail}/>)
                    } </> : <></>)
                }

            </div>
        </>
    );
}
  
export default Werk;
  