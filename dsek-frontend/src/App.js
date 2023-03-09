import './App.css';
import Alumni from './templates/committee/Alumni';
import DEG from './templates/committee/DEG';
import EventU from './templates/committee/EventU';
import MafU from './templates/committee/MafU';
import NarU from './templates/committee/NarU';
import PubU from './templates/committee/PubU';
import UtbU from './templates/committee/UtbU';
import Valberedningen from './templates/committee/Valberedningen';
import Werk from './templates/committee/Werk';
import Page from './templates/Page';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './templates/Home';
import Home2 from './templates/Home2';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DCalendar from './templates/misc/DCalendar';

function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<><Header /><Home /><Footer /></>}></Route>
                        <Route path="/home2" element={<><Header /><Home2 /><Footer /></>}></Route>
                        <Route path="/page/:id" element={<><Header /><Page /><Footer /></>}></Route>
                        <Route path="/deg" element={<DEG />}></Route>
                        <Route path="/valberedningen" element={<Valberedningen />}></Route>
                        <Route path="/alumni" element={<Alumni />}></Route>
                        <Route path="/werk" element={<Werk />}></Route>
                        <Route path="/utbu" element={<UtbU />}></Route>
                        <Route path="/pubu" element={<PubU />}></Route>
                        <Route path="/naru" element={<NarU />}></Route>
                        <Route path="/mafu" element={<MafU />}></Route>
                        <Route path="/eventu" element={<EventU />}></Route>
                        <Route path="/kalender" element={<><Header /><DCalendar /><Footer /></>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
