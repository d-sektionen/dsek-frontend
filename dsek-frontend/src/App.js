import './App.css';
import DEG from './templates/committee/DEG';
import Valberedningen from './templates/committee/Valberedningen';
import Alumni from './templates/committee/Alumni';
import Werk from './templates/committee/Werk';
import UtbU from './templates/committee/UtbU';
import NarU from './templates/committee/NarU';
import PubU from './templates/committee/PubU';
import MafU from './templates/committee/MafU';
import EventU from './templates/committee/EventU';
import Page from './templates/Page';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './templates/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/deg" element={<DEG />}></Route>
          <Route path="/valberedningen" element={<Valberedningen />}></Route>
          <Route path="/alumni" element={<Alumni />}></Route>
          <Route path="/werk" element={<Werk />}></Route>
          <Route path="/utbu" element={<UtbU />}></Route>
          <Route path="/pubu" element={<PubU />}></Route>
          <Route path="/naru" element={<NarU />}></Route>
          <Route path="/mafu" element={<MafU />}></Route>
          <Route path="/eventu" element={<EventU />}></Route>
          <Route path="/page/:id" element={<Page/>}></Route>
        </Routes>
      </BrowserRouter>1
      </div>
      <Footer/>
    </>
  );
}

export default App;
