import PageNav from '../../components/PageNav.js';
import PostPreview from '../../components/PostPreview.js';
import SideNav from '../../components/SideNav.js';
import Sponsors from '../../components/Sponsors.js';
import '../../css/Home.css';

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import React, { useEffect, useState } from 'react';
import { BackToTop } from '../../components/BackToTop.js';
import { getExjobbs, getExjobb } from '../../utils/Strapi.js';
import { showDatetime } from "../../utils/ShowDatetime.js";



export function Exjobb() {
    const [exjobbs, setExjobbs] = useState([]);
    const [exjobb, setExjobb] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchExjobbs = async () => {
            setIsLoading(true);
            try {
                const data = await getExjobbs(-1);
                setExjobbs(data);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };

        fetchExjobbs();
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
        <div className="Home">
            <div className="wide">
                <SideNav />
            </div>
            <div className="Middle">
                <h1>Senaste exjobben</h1>
                {exjobbs.map((exjobb, index) => (
                    <PostPreview key={index} title={exjobb.attributes.title} date={exjobb.attributes.publishedAt} content={exjobb.attributes.preview_content}
                    slug={"/exjobb/" + exjobb.attributes.slug}
                    thumbnailURL={exjobb.attributes.thumbnail.data !== null ? exjobb.attributes.thumbnail.data.attributes.url : "public/logo_white.png"}
                    thumbnailAlt={exjobb.attributes.thumbnail.data !== null ? exjobb.attributes.thumbnail.data.attributes.alternativeText : "Logo"}
                    thumbnailWidth={exjobb.attributes.thumbnail.data !== null ? exjobb.attributes.thumbnail.data.attributes.width : 100}
                    thumbnailHeight={exjobb.attributes.thumbnail.data !== null ? exjobb.attributes.thumbnail.data.attributes.height : 100}
                    id={exjobb.id} />
                ))}
            </div>
            <div className="wide">
                < Sponsors />
                {/* < BackToTop /> */}
            </div>
        </div>
    );

}

export function ExjobbPage() {
    const [exjobb, setExjobb] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const slug = window.location.pathname.split("/").pop()

    console.log(slug)

    useEffect(() => {
        const fetchExjobb = async () => {
            setIsLoading(true);
            try {
                const data = await getExjobb(slug);
                setExjobb(data);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };

        fetchExjobb();
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
        <div className="Home">
            <div className="wide">
                <SideNav />
            </div>
            <div className="Middle" id="pageContainer">
                {exjobb &&
                <div className="PostPreview">
                        <h1 className="PostPreview-Title">{exjobb.attributes.title}</h1>
                        <div className="PostPreview-Date">{showDatetime(exjobb.attributes.publishedAt)}</div>
                        <div className="PostPreview-Content">
                            <Markdown remarkPlugins={[remarkGfm]}>{exjobb.attributes.content}</Markdown>
                        </div>
                </div>
                }
            </div>
            <div className="wide">
                < Sponsors />
                {/* < BackToTop /> */}
            </div>
            {/* < BackToTop /> */}
        </div>
    );
}