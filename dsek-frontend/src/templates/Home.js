import Widget from '../components/Widget.js';
import PostPreview from '../components/PostPreview.js';
import SideNav from '../components/SideNav.js';
import PageNav from '../components/PageNav.js';
import '../css/Home.css';

import React, { useState, useEffect } from 'react'
import {getData} from '../utils/NetFuncs';
import { BackToTop } from '../components/BackToTop.js';


function Home() {
    const [Posts, setPosts] = useState([])
    const [ActivePosts, setActivePosts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const POSTS_PER_PAGE = 2

    useEffect(() => {
        (async () => { 
            const data = await getData("posts");
            setPosts(data);
            setTotalPages(Math.ceil(data.length / POSTS_PER_PAGE));
            setCurrentPage(1);
        })();
    }, []);

    
    const changePage = (page) => {
        if(page > 0 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    useEffect(() => {
        let active = []
        for(let i = 0; i < POSTS_PER_PAGE; i++) {
            if(Posts[POSTS_PER_PAGE * (currentPage - 1) + i]){
                active.push(Posts[POSTS_PER_PAGE * (currentPage - 1) + i])
            }   
        }
        setActivePosts(active)
        return () => {}
    }, [currentPage, Posts])

    return (
        <div className="Home">
            <div className="Left">
                <SideNav/>
                <Widget title="Kommande aktiviteter" content={[[0, "Det finns inga kommande aktiviteter"]]}/>
            </div>
            <div className="Middle">
                {
                    ActivePosts ?
                    <>{ActivePosts.map((postData, index) => <PostPreview key={index}  title={postData.title} date={postData.date.substring(0, 10)} content={postData.content}/>)}</>
                    : 
                    <>{Posts.map((postData, index) => <PostPreview key={index} title={postData.title} date={postData.date.substring(0, 10)} content={postData.content}/>)}</>
                }
                <PageNav posts={Posts} setPage={changePage} currentPage={currentPage} totalPages={totalPages}/>
            </div>
            <div className="Right">
                <Widget title="Huvudsponsor" content={[[1, "ericsson.png", "http://www.ericsson.com/careers"]]}/>
                <Widget title="Samarbetspartners" content={[[1, "ITEA-Pro-1.png", "https://www.iteapro.se/"], [1, "sectra.png", "https://www.sectra.com/jobs"], [1, "profilpartner_logo.jpg", "https://www.profilpartner.se/"]]}/>
                <Widget title="I stolt samarbete med" content={[[1, "lt_logga.png", "https://lintek.liu.se/"]]}/>
                <Widget title="Vi är stolta över att vara" content={[[1, "gron_sektion.png", "https://www.student.liu.se/vid-sidan-av-studierna/studentorganisationer/gronasektioner?l=sv"]]}/>
            </div>
            < BackToTop />
        </div>
    );
}
  
export default Home;