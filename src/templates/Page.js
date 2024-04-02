import SideNav from '../components/SideNav.js';
import Sponsors from '../components/Sponsors.js';
import '../css/Home.css';

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';
import { BackToTop } from '../components/BackToTop.js';
import { getPage } from '../utils/Strapi.js';
import { showDatetime } from "../utils/ShowDatetime.js";

export default function Page() {
    const [page, setPage] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const slug = window.location.pathname.split("/").pop()

    useEffect(() => {
        const fetchPage = async () => {
            setIsLoading(true);
            try {
                const data = await getPage(slug);
                setPage(data);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };

        fetchPage();
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
                {page &&
                    <div className="PostPreview">
                            <h1 className="PostPreview-Title">{page.attributes.title}</h1>
                            <div className="PostPreview-Date">{showDatetime(page.attributes.updatedAt)}</div>
                            <div className="PostPreview-Content">
                                <Markdown remarkPlugins={[remarkGfm]}>{page.attributes.content}</Markdown>
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
