import './App.css';
import BlogPage from './templates/Blogpost';
import Page from './templates/Page';
import Alumni from './templates/committee/Alumni';
import DEG from './templates/committee/DEG';
import EventU from './templates/committee/EventU';
import MafU from './templates/committee/MafU';
import NarU from './templates/committee/NarU';
import PubU from './templates/committee/PubU';
import UtbU from './templates/committee/UtbU';
import InfU from './templates/committee/InfU';
import Valberedningen from './templates/committee/Valberedningen';
import Werk from './templates/committee/Werk';
import Link from './templates/committee/Link';
import Dgroup from './templates/committee/Dgroup';
import Donna from './templates/committee/Donna';
import Staben from './templates/committee/Staben';
import UtskottPage from './templates/committee/Utskott';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './templates/Home';

import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Calendar from './templates/misc/Calendar';
import SocialMedia from './templates/misc/SocialMedia';

function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<><Header /><Home /><Footer /></>}></Route>
                        <Route path="/page/:slug" element={<><Header /><Page /><Footer /></>}></Route>
                        <Route path="/blogpost/:slug" element={<><Header /><BlogPage /><Footer /></>}></Route>
                        <Route path="/utskott/:slug" element={<UtskottPage />}></Route>
                        <Route path="/deg" element={<DEG />}></Route>
                        <Route path="/valberedningen" element={<Valberedningen />}></Route>
                        <Route path="/alumni" element={<Alumni />}></Route>
                        <Route path="/werk" element={<Werk />}></Route>
                        <Route path="/utbu" element={<UtbU />}></Route>
                        <Route path="/pubu" element={<PubU />}></Route>
                        <Route path="/naru" element={<NarU />}></Route>
                        <Route path="/mafu" element={<MafU />}></Route>
                        <Route path="/eventu" element={<EventU />}></Route>
                        <Route path="/infu" element={<InfU />}></Route>
                        <Route path="/donna" element={<Donna />}></Route>
                        <Route path="/dgroup" element={<Dgroup />}></Route>
                        <Route path="/link" element={<Link />}></Route>
                        <Route path="/staben" element={<Staben />}></Route>
                        <Route path="/kalender" element={<><Header /><Calendar /><Footer /></>}></Route>
                        <Route path="/socialamedier" element={<><Header /><SocialMedia /><Footer /></>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
