import SideNav from '../components/SideNav.js';
import Sponsors from '../components/Sponsors.js';
import '../css/Home.css';

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackToTop } from '../components/BackToTop.js';
//import { getPosts } from '../utils/NetFuncs';
import { getBlogpost } from '../utils/Strapi.js';
import { showDatetime } from "../utils/ShowDatetime.js";

export default function BlogPage() {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const slug = window.location.pathname.split("/").pop()

    useEffect(() => {
        const fetchPost = async () => {
            setIsLoading(true);
            try {
                const data = await getBlogpost(slug);
                setPost(data);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };

        fetchPost();
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
                {post &&
                <div className="PostPreview">
                        <h1 className="PostPreview-Title">{post.attributes.title}</h1>
                        <div className="PostPreview-Date">{showDatetime(post.attributes.publishedAt)}</div>
                        <div className="PostPreview-Content">
                            <Markdown remarkPlugins={[remarkGfm]}>{post.attributes.content}</Markdown>
                        </div>
                </div>
                }
            </div>
            <div className="wide">
                < Sponsors />
                < BackToTop />
            </div>
            < BackToTop />
        </div>
    );
}
