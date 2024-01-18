import DsekHeader from '../../components/committee/DsekHeader';
import Group from '../../components/committee/Group';
import '../../css/committee/EventU.css';
import { getUtskott } from '../../utils/Strapi';
import { showDatetime } from "../../utils/ShowDatetime.js";

import React, { useEffect, useState } from 'react';
// For markdown:
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function EventU() {
    const [data, setData] = useState(null);
    const [eventu, setEventu] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const eventuSub = ["dlan", "d20", "dband", "aktu", "schlagu"]

    useEffect(() => {
        const fetchEventu = async () => {
            setIsLoading(true);
            try {
                var eventuSubData = [];
                for (const sub of eventuSub) {
                    const data = await getUtskott(sub);
                    eventuSubData.push(data);
                }
                setData(eventuSubData);

                const eventuData = await getUtskott("eventu");
                setEventu(eventuData);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };

        fetchEventu();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <DsekHeader />
            <div className="EventU">
                {eventu &&
                    <div className={eventu.attributes.slug}>
                        <h1 className="EventU-Title">{eventu.attributes.title}</h1>
                        <Markdown className="EventU-Desc" remarkPlugins={[remarkGfm]}>{eventu.attributes.preview_content}</Markdown>
                        <Markdown className="EventU-Content" remarkPlugins={[remarkGfm]}>{eventu.attributes.content}</Markdown>
                        <hr /><h2 className="EventU-Sub-Title">Eventutskottets Undergrupper</h2>
                        {data && data.map((groupData, index) => (
                            <div key={index} className={groupData.attributes.slug}>
                                <Group
                                preview={groupData.attributes.preview_content}
                                content={groupData.attributes.content}
                                title={groupData.attributes.title}
                                img={groupData.attributes.slug}
                                slug={groupData.attributes.slug}
                                instagram={groupData.attributes.instagram}
                                facebook={groupData.attributes.facebook}
                                website={groupData.attributes.website}
                                discord={groupData.attributes.discord}
                                mail={groupData.attributes.mail} />
                            </div>
                        ))}
                        <p className="utskott_content_date">Senaste redigerad: {showDatetime(eventu.attributes.publishedAt)}</p>
                    </div>
                }
            </div >
        </>
    );
}

export default EventU;
