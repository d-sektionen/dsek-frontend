import SideNav from '../components/SideNav.js';
import Sponsors from '../components/Sponsors.js';
import '../css/Home.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackToTop } from '../components/BackToTop.js';
import { getDocuments } from '../utils/Strapi.js';

export default function Document() {
    const [documents, setDocuments] = useState([]);
    const [document, setdocument] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchDocuments = async () => {
            setIsLoading(true);
            try {
                const data = await getDocuments();
                setDocuments(data);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };

        fetchDocuments();
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
                <h1>Dokument</h1>
                {documents.map((document, index) => (
                    <div key={index}>
                        <p>Document {index}</p>
                        <a><p>{document}</p></a>
                    </div>
                ))}
            </div>
            <div className="wide">
                < Sponsors />
                {/* < BackToTop /> */}
            </div>
        </div>
    );
}