import '../../css/committee/Alumni.css'
import DsekHeader from '../../components/committee/DsekHeader';
import Contact from '../../components/committee/Contact';

function Alumni() {
    return (
        <>
            <DsekHeader/>
            <div className="Alumni">
                <div>
                    <img src={"Alumniutskottet_logo.png"}/>
                    <p className="Alumni-Desc">
                        Alumniutskottet stärker relationen mellan före detta studenter (alumner), universitetet och omvärlden, 
                        för att ge möjlighet till ömsesidig utveckling av kunskap, kompetens och kontakter. 
                        Detta görs genom att hålla olika typer av event såsom lunchföreläsningar med gamla studenter eller afterwork-pubar där 
                        D-studenter kan mingla med alumner. Dessutom håller Alumniutskottet i Generationssittningen, ett evenemang för alla 
                        tidigare och nuvarande förtroendevalda på sektionen.
                    </p>
                </div>

                <div className="Alumni-Section">
                    <h2>Alumnföreläsning</h2>
                    <hr/>
                    <p className="Alumni-Section-Text">
                        En föreläsning ger alumner möjligheten att prata och inspirera inför nuvarande studenter under en lunch eller eftermiddag. 
                        Exempel på saker att prata om är: Vilka mål har du uppnått? Vilka stockar har du fått kliva över, såga itu, 
                        gå runt för att komma dit du är idag? Under föreläsningarna bjuder alumniutskottet eller ett företag på lunch till besökarna.
                    </p>
                </div>

                <div className="Alumni-Section">
                    <h2>Afterwork</h2>
                    <hr/>
                    <p className="Alumni-Section-Text">
                        Alumniutskottet arrangerar AW:s minst en gång per termin där alumner bjuds in för att träffa både nuvarande studenter och andra alumner. 
                        AW är ett mer avslappnat event där god mat och dryck i samklang med bra mingel är huvudfokus.
                    </p>
                </div>

                <div className="Alumni-Section">
                    <h2>Skugga Alumn</h2>
                    <hr/>
                    <p className="Alumni-Section-Text">
                        Huvudsyftet med detta är att ge studenter en möjlighet att uppleva hur en dag i det riktiga arbetslivet faktiskt kan se ut, 
                        vilket kan vara en väldigt spännande och roligt upplevelse för studenterna. Evenemanget går ut på att hitta alumner i arbetslivet 
                        som kan tänka sig ta emot en eller flera studenter som följer med denna under vanligtvis en halv arbetsdag.
                    </p>
                </div>

                <div className="Alumni-Section">
                    <h2>Generationssittning</h2>
                    <hr/>
                    <p className="Alumni-Section-Text">
                        En gång per år arrangerar alumniutskottet en sittning för alla som är eller har varit förtroendevalda på sektionen för att skapa en 
                        samhörighet mellan studenter och alumner, samt vara ett extra tack till de som engagerar sig extra mycket i sektionen.
                    </p>
                </div>

                <div className="Alumni-Section">
                    <h2>Kontaktinfo</h2>
                    <hr/>
                    <div className="Alumni-Contact">
                        <Contact name="Richard Johansson" post="Ordförande" mail="alumni@d-sektionen.se"/>
                        <Contact name="Max Mogren" post="Vice Ordförande" mail="vice.alumni@d-sektionen.se"/>
                        <Contact name="Danijel Grujicic" post="AW Ansvarig" mail="aw.alumni@d-sektionen.se"/>
                        <Contact name="Victor Dahlsberg" post="Föreläsningsansvarig" mail="forelasning.alumni@d-sektionen.se"/>
                        <Contact name="Sean Zhong" post="Sittningsansvarig" mail="sittning.alumni@d-sektionen.se"/>
                        <Contact name="Alex Wahlgren" post="Skugga Alumn" mail="skugga.alumni@d-sektionen.se"/>
                        <Contact name="Gustav Elmqvist" post="Tryck & PR" mail="tryck.alumni@d-sektionen.se"/>
                    </div>
                </div>
            </div>
        </>
    );
}
  
export default Alumni;
  