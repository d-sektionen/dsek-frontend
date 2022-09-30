import '../css/PageHeader.css';

const colors = ['#754022', '#e5398d', '#f7e623', '#70bd44', '#20407c']
const color1 = colors[Math.floor(Math.random()*colors.length)]
const color2 = colors[Math.floor(Math.random()*colors.length)]

function PageHeader() {
    return (
        <div className="Page-Header-Wrapper">
            <div className="No-Image" style={{background: `linear-gradient(45deg, ${color1}, ${color2})`}}/>
            <div className="Gradient"/>
            <div className="Image-Wrapper">
                <div style={{ paddingBottom: '20%' }}>
                    <h1 className="Title">d-sektionen.se</h1>
                    <div className="Page-Header"></div>
                </div>
            </div>
        </div>
    );
}
  
export default PageHeader;