import React, { useEffect, useState } from 'react';
import { getUtskott } from '../../utils/Strapi.js';
import { showDatetime } from "../../utils/ShowDatetime.js";
import CommitteeContacts from '../../components/committee/CommitteeContacts';
import DsekHeader from '../../components/committee/DsekHeader';
import { BackToTop } from '../../components/BackToTop.js';
import '../../css/committee/Utskott.css';
// For markdown:
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function UtskottPage() {
    const [utskott, setUtskott] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const slug = window.location.pathname.split("/").pop();

    useEffect(() => {
        const fetchUtskott = async () => {
            setIsLoading(true);
            try {
                const data = await getUtskott(slug);
                setUtskott(data);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };

        fetchUtskott();
    }, []);

    const scrollToTop = () => {
        console.log("scroll")
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <div className="home">
                <DsekHeader />
                <div className="utskott ">
                    {utskott &&
                        <div className={utskott.attributes.slug}>
                            <h1 className="utskott_header_title">{utskott.attributes.title}</h1>
                            <Markdown className="utskott_header_description" remarkPlugins={[remarkGfm]}>{utskott.attributes.preview_content}</Markdown>
                            <Markdown className="utskott_content_text" remarkPlugins={[remarkGfm]}>{utskott.attributes.content}</Markdown>
                            <p className="utskott_content_date">Senaste redigerad: {showDatetime(utskott.attributes.publishedAt)}</p>
                        </div>
                    }
                </div>
                < BackToTop />
            </div>

        </>
    );
}

export default UtskottPage;