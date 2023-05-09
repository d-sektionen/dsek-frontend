import SideNav from "../../components/SideNav";
import Sponsors from "../../components/Sponsors";
import '../../css/SocialMedia.css';
import { BackToTop } from "../../components/BackToTop";

export default function SocialMedia() {
    return (
        <div className="Home">
            <div className="wide">
                <SideNav />
            </div>
            <div className="Middle">
                <h1>Sociala Medier</h1>

                 <h2>D-sektionen</h2>
                
                    <p><a href="https://www.facebook.com/datateknologsektionen/">Facebook-sidan &#8220;Datateknologsektionen&#8221;</a></p>
                    <p><a href="https://www.facebook.com/groups/detbasta/">Facebook-gruppen &#8220;D-sektionen&#8221;</a></p>
                    <p><a href="https://www.facebook.com/groups/dsaljer/">Facebook-gruppen &#8220;D-sektionens köp och sälj&#8221; </a></p>
                    <p><a href="https://www.instagram.com/dsektionen/">Instagram-sidan för D-sektionen</a></p>
                    <p><a href="http://instagram.com/sok_datateknologsektionen_liu">Instagram-sidan för dig som är intresserad av våra program</a></p>
                    <p><a href="https://se.linkedin.com/company/datateknologsektionen">LinkedIn</a></p>
                
                <h2>AktU</h2>
                
                    <p><a href="https://www.facebook.com/DAktU/">Facebook</a></p>
                    <p><a href="https://www.instagram.com/aktu_dsektionen/">Instagram</a></p>
                
                 <h2>Alumniutskottet</h2>
                
                    <p><a href="https://www.linkedin.com/groups/8726453/">Datateknologsektionens Alumner (LinkedIn)</a></p>
                    <p><a href="https://www.facebook.com/xDsektionen/">Facebook</a></p>
                
                 <h2>D-Band</h2>
                
                    <p><a href="https://www.facebook.com/dbandliu/">Facebook</a></p>
                    <p><a href="https://www.instagram.com/dbandliu/">Instagram</a></p>
                
                 <h2>D-Group</h2>
                
                    <p><a href="https://www.facebook.com/DGroup1415/">Facebook</a></p>
                    <p><a href="https://www.instagram.com/dgroup1819/">Instagram</a></p>
                    <p><a href="https://www.snapchat.com/add/d_group">Snapchat</a></p>
                    <p><a href="https://soundcloud.com/d-group">SoundCloud</a></p>
                
                 <h2>D-LAN</h2>
                
                    <p><a href="https://www.facebook.com/DeBastaLanet">Facebook</a></p>
                
                 <h2>Donna</h2>
                
                    <p><a href="https://www.facebook.com/donna.d.sektionen/">Facebook</a></p>
                    <p><a href="https://www.instagram.com/donna_dsektionen/">Instagram</a></p>
                
                 <h2>Draglaget</h2>
                
                    <p><a href="https://www.instagram.com/dsektionensdraglag/">Instagram</a></p>
                
                 <h2>LINK</h2>
                
                    <p><a href="https://www.facebook.com/linkdagarna/">Facebook</a></p>
                    <p><a href="https://www.instagram.com/linkdagarna/">Instagram</a></p>
                
                 <h2>Marknadsföringsutskottet</h2>
                
                    <p><a href="https://instagram.com/mafu_dsektionen?igshid=5xjyh2j7isp7">Instagram</a></p>
                
                 <h2>Näringslivsutskottet</h2>
                
                    <p><a href="https://www.facebook.com/datateknologsektionen.naru/">Facebook</a></p>
                
                 <h2>Pubutskottet</h2>
                
                    <p><a href="https://www.facebook.com/D-Sektionens-Pubutskott-538102972952822/">Facebook</a></p>
                
                <h2 className="staben align-left">STABEN</h2>
                
                    <p><a href="https://www.instagram.com/instabgram19/">In<span className="staben">STAB</span>gram</a></p>
                
            </div>
            <div className="wide">
                < Sponsors />
                < BackToTop />
            </div>
        </div>
    );
}