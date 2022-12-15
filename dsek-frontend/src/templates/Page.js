import SideNav from '../components/SideNav.js';
import Sponsors from '../components/Sponsors.js';
import '../css/Home.css';

import { marked } from 'marked';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';
import { BackToTop } from '../components/BackToTop.js';
import { getData } from '../utils/NetFuncs';

export default function Page() {
    const params = useParams();
    useEffect(() => {
        (async () => {
            console.log(params);
            const res = await getData("pages/" + params.id);
            const data = marked.parse(res.data);
            document.getElementById('pageContainer').innerHTML = sanitizeHtml(data);
        })();
    }, [params]);

    return (
        <div className="Home">
            <SideNav />
            <div className="Middle" id="pageContainer"></div>
            < Sponsors />
            < BackToTop />
        </div>
    );
}
