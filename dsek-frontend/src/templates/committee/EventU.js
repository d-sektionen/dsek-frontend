import '../../css/committee/EventU.css'
import DsekHeader from '../../components/committee/DsekHeader';
import Group from '../../components/committee/Group';
import data from '../../fake-cms/eventu-committee.json'

function EventU() {
    return (
        <>
            <DsekHeader/>
            <div className="EventU">
                <div className="EventU-Content">
                    <h1>Eventutskottet</h1>
                    <p>
                        Aktivitetsutskottet är ett av sektionens största utskott och arbetar kontinuerligt för att se till att det alltid finns 
                        någonting kul att göra tillsammans med andra sektionsmedlemmar utanför skoltid.
                        Utskottet består av två grupper: den grönklädda aktivitetsgruppen AktU, samt projektgruppen D-LAN. 
                        Vi bistår även med stöd till sektionens band D-Band, samt till alla med idéer på nya roliga aktiviteter.
                    </p>

                    <h2>Medlemsaktiviteter</h2>
                    <p>
                        Som sektionsmedlem har du möjlighet, förutom att söka och bli del av våra härliga grupper, att få hjälp och stöd att genomföra 
                        aktiviteter du vill se anordnas på sektionen. Kontakta oss om du har en idé på någonting du tycker vore kul att styra upp för våra medlemmar. 
                        Aktivitetsutskottet kan erbjuda exempelvis ekonomisk hjälp, hjälp att marknadsföra ditt evenemang mot sektionen, eller andra resurser från 
                        till exempel den gröna AktU-gruppen. Vi har bland annat stöttat medlemmar som velat anordna en tackfest för STABEN, samt hjälpt anordna 
                        rollspelskvällar.
                    </p>
                    <p>
                        Kontakta utskottets aktivitetshanterare med dina frågor och idéer, eller om du har allmänna frågor om utskottet som helhet!
                    </p>
                </div>
                <hr/><h2>Grupper</h2><hr/>
                {
                    data.map((groupData) => <Group img={groupData.Logo} info={groupData.Info} socials={groupData.Socials} color={groupData.Color} background={groupData.BackgroundColor}/>)
                }
            </div>
        </>
    );
}
  
export default EventU;
  