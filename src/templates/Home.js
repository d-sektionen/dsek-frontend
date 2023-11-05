import PageNav from '../components/PageNav.js';
import PostPreview from '../components/PostPreview.js';
import SideNav from '../components/SideNav.js';
import Sponsors from '../components/Sponsors.js';
import '../css/Home.css';

import { marked } from 'marked';
import React, { useEffect, useState } from 'react';
import { BackToTop } from '../components/BackToTop.js';
//import { getPosts } from '../utils/NetFuncs';
import { getBlogposts } from '../utils/Strapi.js';



function Home() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const data = await getBlogposts(-1);
                setPosts(data);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };

        fetchPosts();
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
                <h1>Senaste nyheterna</h1>
                {posts.map((post, index) => (
                    <PostPreview key={index} title={post.attributes.title} date={post.attributes.publishedAt} content={post.attributes.preview_content} slug={post.attributes.slug} id={post.id} />
                ))}
            </div>
            <div className="wide">
                < Sponsors />
                < BackToTop />
            </div>
        </div>
    );

}

export default Home;