import Widget from '../components/Widget.js';
import PostPreview from '../components/PostPreview.js';
import SideNav from '../components/SideNav.js';
import '../css/Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="Left">
                <SideNav/>
                <Widget title="Kommande aktiviteter" text="Det finns inga kommande aktiviteter"/>
            </div>
            <div className="Middle">
                <PostPreview/>
            </div>
            <div className="Right">
                <Widget title="Huvudsponsor" link="https://d-sektionen.se/wp-content/uploads/2019/03/ericsson.png"/>
                <Widget title="Samarbetspartners" link="https://d-sektionen.se/wp-content/uploads/2021/11/ITEA-Pro-1.png"/>
                <Widget title="I stolt samarbete med" link="https://d-sektionen.se/wp-content/uploads/2020/10/lt_logga.png"/>
                <Widget title="Vi är stolta över att vara" link="https://d-sektionen.se/wp-content/uploads/2016/09/gron_sektion.png"/>
            </div>
        </div>
    );
}
  
export default Home;