import { FiMoreHorizontal, FiFacebook, FiInstagram } from 'react-icons/fi'
import './App.css';

const colors = ['#754022', '#e5398d', '#f7e623', '#70bd44', '#20407c']
const color1 = colors[Math.floor(Math.random()*colors.length)]
const color2 = colors[Math.floor(Math.random()*colors.length)]

function App() {
  return (
    <div className="App">
      
      <div className="Header-Wrapper">
        <div className="No-Img" style={{background: `linear-gradient(45deg, ${color1}, ${color2})`}}/>
        <div className="Gradient"/>
        <div className="Img-Wrapper">
          <div style={{ paddingBottom: '20%' }}>
            <h1 className="Title">d-sektionen.se</h1>
            <div className="Page-Header"></div>
          </div>
        </div>
      </div>

      <footer className="Footer">
        <div className="Social-Icons">
          <a href="https://www.facebook.com/datateknologsektionen">
            <FiFacebook />
          </a>
          <a href="https://instagram.com/dsektionen">
            <FiInstagram />
          </a>
          <a href="/socialamedier">
            <FiMoreHorizontal />
          </a>
        </div>
        <div className="Footer-Content">
          <div className="Logo">
            <img src={"/logo.png"} alt="D-sektionen" />
            Datateknologsektionen, Kårallen, Universitetet, 581&nbsp;83&nbsp;Linköping
          </div>
          <div className="Links">
            <a href="/404">Kontakt</a>
            <a href="/404">Sektionsinfo</a>
            <a href="/404">Personuppgiftshantering</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
