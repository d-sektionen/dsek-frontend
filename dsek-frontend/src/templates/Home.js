import PageNav from '../components/PageNav.js';
import PostPreview from '../components/PostPreview.js';
import SideNav from '../components/SideNav.js';
import Sponsors from '../components/Sponsors.js';
import '../css/Home.css';

import { marked } from 'marked';
import React, { useEffect, useState } from 'react';
import { BackToTop } from '../components/BackToTop.js';
import { getPosts } from '../utils/NetFuncs';




function Home() {
    const [Posts, setPosts] = useState([])
    const [ActivePosts, setActivePosts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const POSTS_PER_PAGE = 3

    useEffect(() => {
        (async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const search = urlParams.get("s") || "";

            const data = await getPosts(-1);
            console.log(data);
            let posts = [];
            for (const p of data.data) {
                posts.push({
                    title: p.title,
                    preview: marked.parse(p.preview_content),
                    content: marked.parse(p.content),
                    date: p.date_created,
                    id: p.id
                });
            }
            console.log(posts);


            setPosts(posts)
            setTotalPages(Math.ceil(posts.length / POSTS_PER_PAGE));
            setCurrentPage(1);
        })();
    }, []);


    function scrollToTop() {
        console.log("scroll")
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const changePage = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page)
        }
        setTimeout(() => {
            scrollToTop();
        }, 50)

    }

    useEffect(() => {
        let active = []
        for (let i = 0; i < POSTS_PER_PAGE; i++) {
            if (Posts[POSTS_PER_PAGE * (currentPage - 1) + i]) {
                active.push(Posts[POSTS_PER_PAGE * (currentPage - 1) + i])
            }
        }
        setActivePosts(active)
        return () => { }
    }, [currentPage, Posts])

    return (
        <div className="Home">
            <div className="wide">
                <SideNav />
            </div>
            <div className="Middle">
                {
                    ActivePosts.length > 0 ?
                        <>{ActivePosts.map((postData, index) => <PostPreview key={index} title={postData.title} date={postData.date.substring(0, 10)} content={postData.preview} />)}</>
                        :
                        <>{Posts.map((postData, index) => <PostPreview key={index} title={postData.title} date={postData.date.substring(0, 10)} content={postData.preview} />)}</>
                }
                <PageNav posts={Posts} setPage={changePage} currentPage={currentPage} totalPages={totalPages} />
            </div>
            <div className="wide">
                < Sponsors />
                < BackToTop />
            </div>
        </div>
    );

}

export default Home;