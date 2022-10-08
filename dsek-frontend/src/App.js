import './App.css';
import Layout from './components/Layout';
import DEG from './templates/committee/DEG';
import Valberedningen from './templates/committee/Valberedningen';
import Alumni from './templates/committee/Valberedningen';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/deg" element={<DEG />}></Route>
        <Route path="/valberedningen" element={<Valberedningen />}></Route>
        <Route path="/alumni" element={<Alumni />}></Route>
        {/*
          <Route path="/eventu" element={<EventU />}></Route>
          <Route path="/pubu" element={<PubU />}></Route>
          <Route path="/mafu" element={<MafU />}></Route>
          <Route path="/naru" element={<NarU />}></Route>
          <Route path="/werk" element={<Werk />}></Route>
        */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
