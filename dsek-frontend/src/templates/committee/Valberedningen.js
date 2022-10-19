import '../../css/committee/Valberedningen.css'
import DsekHeader from '../../components/committee/DsekHeader';

function Valberedningen() {
    return (
        <>
            <DsekHeader/>
            <div className="Valberedningen">
                <h1>Valberedningen</h1>
                <p className="ValleB-Desc">
                    För att sektionen ska fungera så väl som den gör krävs det att vi har duktiga sektionsaktiva som för 
                    sektionen framåt. Det är Valberedningens uppdrag för att söka kandidater till sektionens förtroendeposter 
                    för att sedan intervjua dessa och slutligen nominera de som vi finner mest lämpliga för var och en av posterna 
                    inför sektionens höst-, vinter- och vårmöten.
                </p>
                <p className="ValleB-Desc">
                    Till oss kan du antingen söka en post eller välja att nominera någon du tror skulle passa för en post. 
                    Vi behandlar samtliga nomineringar och intervjuar de nominerade för att sedan presentera vårt förslag 
                    på sektionens medlemsmöten där medlemmarna får en möjlighet att ta ställning till våra val.
                </p>

                <div class="ValleB-Link-Wrapper">
                    <a href="#" className="ValleB-Link">Valberedningens urvalsprocess</a><br/>
                    <a href="#" className="ValleB-Link">Valberedningens policy</a>
                </div>

                <i><p className="ValleB-Small">Har du frågor eller funderingar? Tveka inte att kontakta <a href="#">val@d-sektionen.se</a></p></i>

                <h2>Hur går det till?</h2>

                <div className="ValleB-Process-Wrapper">
                    <h3>1. Sökperiod</h3>
                    <p>
                        Valberedningen annonserar en sökperiod där man under en tid tar emot nomineringar. 
                        Antingen så nominerar man sig själv eller en vän som man tycker passar för posten. 
                        Sök posten själv eller nominera en kandidat via <a>detta formulär</a>.
                    </p>
                </div>
                
                <div className="ValleB-Process-Wrapper">
                    <h3>2. Intresse för posten?</h3>
                    <p>
                        När sökperioden är slut så mailar Valberedningen till alla som blivit nominerade och 
                        hör ifall de är intresserade av den post hen är nominerad till. Det är således inget 
                        krav att komma på intervju för att man blivit nominerad utan man kan här bara tacka nej 
                        till nomineringen.
                    </p>
                </div>
                
                <div className="ValleB-Process-Wrapper">
                    <h3>3. Intervju</h3>
                    <p>
                        Valberedningen kallar de som är intresserade av posten till intervju och beslutar om vem de tycker 
                        är lämpligast för posten. Här följer några tips som är bra att tänka på inför intervjun:
                    </p>
                    <ul>
                        <li>Läs på om posten. Information om alla poster finns under <a>Postbeskrivningar.</a></li>
                        <li>Prata gärna med den som för närvarande innehar posten för att få en uppfattning om arbetsinsatsen som krävs.</li>
                        <li>Va inte nervös. Valberedningen bits inte.</li>
                        <li>Va dig själv!</li>
                    </ul>
                </div>

                <div className="ValleB-Process-Wrapper">
                    <h3>4. Offentliggörande</h3>
                    <p>
                        Enligt D-sektionens stadgar skall Valberedningens nomineringar presenteras senast 5 läsdagar 
                        innan sektionsmötet och då kommer Valberedningens nomineringar att läggas upp på sektionens hemsida, 
                        tillgängliga för alla.
                    </p>
                </div>

                <div className="ValleB-Process-Wrapper">
                    <h3>5. Mötet</h3>
                    <p>
                        Eftersom sektionsmötet (där alla sektionens medlemmar får närvara) är det högsta beslutande organ på 
                        D-sektionen så är det sedan här som man väljer in de poster som Valberedningen intervjuar. 
                        Valberedningen presenterar här sin nominering med en motivering. Efter detta är det fritt fram för vem 
                        som att motkandidera mot Valberedningens nominering och röstning får då här besluta om vem som väljs. 
                        Om ingen motkandidat inkommer går man vidare och beslutar om man ska välja in Valberedningens nominering.
                    </p>
                </div>
            </div>
        </>
    );
}
  
export default Valberedningen;
