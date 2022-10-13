import '../../css/committee/Alumni.css'
import DsekHeader from '../../components/committee/DsekHeader';

function Alumni() {
    return (
        <>
            <DsekHeader/>
            <div className="Alumni">
                <div>
                    <img src="https://d-sektionen.se/wp-content/uploads/2019/09/Webp.net-resizeimage.png"/>
                    <p className="Alumni-Desc">
                        Syftet med verksamheten är att stärka relationen mellan före detta studenter (alumner), universitetet och omvärlden, 
                        för att ge möjlighet till ömsesidig utveckling av kunskap, kompetens och kontakter.
                    </p>
                </div>
                
                <div className="Alumni-Section">
                    <h2>Aktivera dig</h2>
                    <hr/>
                    <h3 className="Alumni-Section-Title">Gästföreläsa</h3>
                    <p className="Alumni-Section-Text">
                        En föreläsning ger dig möjligheten att prata och inspirera inför nuvarande studenter under en lunch eller eftermiddag. 
                        Vilka mål har du uppnått? Vilka stockar har du fått kliva över, såga itu, gå runt för att komma dit du är idag?
                    </p>
                    <p className="Alumni-Section-Text">
                        Intresse skickas till mig så vi kan planera och diskutera detaljerna för ditt besök. Vi står för att boka lokal och mat osv. 
                        så tveka inte att höra av dig om du är intresserad.
                    </p>

                    <h3 className="Alumni-Section-Title">Mingla på D-Pub</h3>
                    <p className="Alumni-Section-Text">
                        Pubutskottet arrangerar en pub minst en gång i måndaden så tveka inte att komma förbi och träffa kanske både nuvarande studenter 
                        och andra alumner. Hör av dig till mig om du skulle vilja arrangera något litet snack eller mingel i anslutning till en D-Pub.
                    </p>

                    <h3 className="Alumni-Section-Title">Gästblogga</h3>
                    <p className="Alumni-Section-Text">
                        AlumniU driver en Alumni-blogg här på sektionshemsidan där alumner får gästblogga om deras studietid eller andra roliga erfarenheter. 
                        Ett inlägg behöver inte vara särskilt långt eller genomtänkt, utan kan även bara vara en kortare hälsning. Om du tycker det låter 
                        roligt är du mer än välkommen att skicka ett mail till nedanstående mail-adress.
                    </p>

                    <a href="mailto:blogg.alumni@d-sektionen.se" className="Alumni-Mail">blogg.alumni@d-sektionen.se</a>
                </div>

                <div className="Alumni-Section">
                    <h2>Förbered dig</h2>
                    <hr/>
                    <h3 className="Alumni-Section-Title">Alumniwebben</h3>
                    <p className="Alumni-Section-Text">
                        Se till att hålla din mailadress och övriga uppgifter uppdaterade på <a href="https://liu.se/samverkan/alumni" className="Alumni-Link">LiU:s alumniwebb</a> för att få den senaste informationen från 
                        sektionen och universitetet.
                    </p>
                    <p className="Alumni-Section-Text">
                        Hör gärna av dig med idéer och förslag på hur vi kan göra sektionens alumniverksamhet så bra som möjligt, eller om du har andra frågor.
                    </p>
                </div>

                <div className="Alumni-Section">
                    <h2>Därför är alumniverksamheten viktig för dig</h2>
                    <hr/>
                    <p className="Alumni-Section-Text">
                        Med hjälp av vår alumniverksamhet får du tillgång till en kontaktnät som hjälper dig att hålla kontakt med sektionen och andra 
                        föreningar som du var aktiv i under din studietid. Dessutom kan du ta kontakt med dagens studenter, morgondagens anställda! 
                        Du kan via sektionen påverka dagens utbildning om du känner att det finns viktiga delar som du saknade i din utbildning.
                    </p>
                </div>

                <div className="Alumni-Section">
                    <h2>Därför är du viktig för D-sektionen</h2>
                    <hr/>
                    <p className="Alumni-Section-Text">
                        Du som alumn är viktig för sektionen då du kan bidra med erfarenhet inom universitetsvärlden. Du kan visa medlemmarna inom 
                        sektionen vad som händer efter utbildningen, till exempel genom att berätta vad du jobbar med idag och vad som är bra att 
                        läsa om man vill jobba med detta.
                    </p>
                    <p className="Alumni-Section-Text">
                        D-sektionen jobbar hårt med att låta våra medlemmar ha god kontakt med arbetslivet under sin studietid, både i form av 
                        gästföreläsningar, studiebesök, praktikplatser och examensarbeten.
                    </p>
                    <p className="Alumni-Section-Text">
                        Om vi vet var våra medlemmar hamnar efter utbildningen hjälper det oss i att rekrytera nya studenter till sektionens alla utbildningar.
                    </p>
                </div>
            </div>
        </>
    );
}
  
export default Alumni;
  