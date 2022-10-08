import Widget from '../components/Widget.js';
import PostPreview from '../components/PostPreview.js';
import SideNav from '../components/SideNav.js';
import PageNav from '../components/PageNav.js';
import '../css/Home.css';

import postsData from '../fake-cms/posts.json';

function Home() {
    return (
        <div className="Home">
            <div className="Left">
                <SideNav/>
                <Widget title="Kommande aktiviteter" text="Det finns inga kommande aktiviteter"/>
            </div>
            <div className="Middle">
                {
                    postsData.map((postData) => <PostPreview title={postData.title} date={postData.date} content={postData.content}/>)
                }
                <PageNav/>
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