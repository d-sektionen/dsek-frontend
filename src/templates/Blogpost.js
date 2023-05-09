import SideNav from '../components/SideNav.js';
import Sponsors from '../components/Sponsors.js';
import '../css/Home.css';

import { marked } from 'marked';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackToTop } from '../components/BackToTop.js';
import { getPosts } from '../utils/NetFuncs';

export default function BlogPage() {
    const params = useParams();
    const [Post, setPost] = useState([])

    console.log("blogpage")
    useEffect(() => {
        (async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const search = urlParams.get("s") || "";

            const resp = await getPosts(params.id);
            const data = resp.data;
            const currentPost = {
                title: data.title,
                preview: marked.parse(data.preview_content),
                content: marked.parse(data.content),
                date: data.date_created,
                id: data.id
            }
            setPost(currentPost)
            console.log(currentPost)
        })();
    }, []);

    function createMarkup(c) {
        return { __html: c };
    }

    return (
        <div className="Home">
            <div className="wide">
                <SideNav />
            </div>
            <div className="Middle" id="pageContainer">
                <h1>{Post.title}</h1>
                {Post && <div className="PostPreview-Content" dangerouslySetInnerHTML={createMarkup(Post.content)}></div>}
            </div>
            <div className="wide">
                < Sponsors />
                < BackToTop />
            </div>
            < BackToTop />
        </div>
    );
}
