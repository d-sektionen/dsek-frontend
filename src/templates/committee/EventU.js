import DsekHeader from '../../components/committee/DsekHeader';
import Group from '../../components/committee/Group';
import '../../css/committee/EventU.css';
import { getData } from '../../utils/NetFuncs';

import React, { useEffect, useState } from 'react';

function EventU() {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => { setData(await getData("eventu-committee")) })();
    }, []);

    return (
        <>
            <DsekHeader />
            <div className="EventU">
                <div className="EventU-Content">
                    <h1 className="EventU-Title">Eventutskottet</h1>
                    <p className="EventU-Desc">
                        Eventutskottet är ett av sektionens största utskott och arbetar kontinuerligt för att se till att det alltid finns
                        någonting kul att göra tillsammans med andra sektionsmedlemmar utanför skoltid.
                        Utskottet består av tre grupper: den grönklädda aktivitetsgruppen AktU, projektgruppen D-LAN, samt rollspelsgruppen D20.
                        Vi bistår även med stöd till sektionens band D-Band, samt till alla med idéer på nya roliga aktiviteter.
                    </p>
                    <h2 className="EventU-Sub-Title">Medlemsaktiviteter</h2>
                    <p className="EventU-Sub-Desc">
                        Som sektionsmedlem har du möjlighet, förutom att söka och bli del av våra härliga grupper, att få hjälp och stöd att genomföra aktiviteter du vill se anordnas på sektionen. Kontakta oss om du har en idé på någonting du tycker vore kul att styra upp för våra medlemmar. Eventutskottet kan erbjuda exempelvis ekonomisk hjälp, hjälp att marknadsföra ditt evenemang mot sektionen, eller andra resurser från till exempel den gröna AktU-gruppen. Vi har bland annat stöttat medlemmar som velat anordna en tackfest för STABEN, samt hjälpt anordna häfvevent för ettan som inte fick häfva under Nolle-P.

                    </p>
                    <p className="EventU-Contact">
                        Kontakta utskottets aktivitetshanterare med dina frågor och idéer, eller om du har allmänna frågor om utskottet som helhet!
                        <br></br>
                        Erik Halvarsson (Aktivitetshanterare 22/23)<br></br>
                        <a href="mailto:aktivitetshanterare@d-sektionen.se">aktivitetshanterare@d-sektionen.se</a>
                    </p>
                </div>
                <hr /><h2>Eventutskottets Undergrupper</h2>
                {
                    data.map((groupData) => <Group img={groupData.Logo} info={groupData.Info} socials={groupData.Socials} color={groupData.Color} background={groupData.BackgroundColor} />)
                }
            </div >
        </>
    );
}

export default EventU;
