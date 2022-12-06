import SideNav from '../components/SideNav.js';
import Sponsors from '../components/Sponsors.js';
import '../css/Home.css';

import React, { useState, useEffect } from 'react'
import {getData} from '../utils/NetFuncs';
import { BackToTop } from '../components/BackToTop.js';
import {useParams} from 'react-router-dom';


export default function Page() {
    const [PageData, setPageData] = useState([])
    
    const params = useParams();

    useEffect(() => {
        (async () => {
            console.log(params);
            const data = await getData("pages/"+params.id);
            setPageData(data);
        })();
    }, [params]);

    return (
        <div className="Home">
            <SideNav/>
            <div className="Middle">
                {PageData.data}
                {/**TODO: parse md*/} 
            </div>
            < Sponsors />
            < BackToTop />
        </div>
    );
}
  