import DsekHeader from "../../components/committee/DsekHeader";
import "../../css/committee/PubU.css";

function PubU() {
  return (
    <>
      <DsekHeader />
      <div className="PubU">
        <img
          src="https://d-sektionen.se/wp-content/uploads/2018/09/pubu-768x442.png"
          className="PubU-Img"
        />
        <hr />
        <p>
          Pubutskottet har för uppgift att arrangera sektionspuben D-Pub som
          riktar sig mot sektionens medlemmar. På D-Pub kan du käka god mat över
          ett varierat utbud av öl, mingla med framtida arbetsgivare och öva på
          din favoritsport Dart. Pubarna hålls i Gasquen, Kårallen, en gång i
          månaden under läsperioderna. Information kring pubarna kommer ut i
          sektionens infomail och som event på{" "}
          <a href="https://www.facebook.com/Pubudsektionen/">Facebook</a>.
        </p>
        <img
          src="https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/334283510_940235100745382_7528285322050034544_n.jpg?stp=c0.7.526.275a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=340051&_nc_ohc=rOD072nc-GoAX9xmSmA&_nc_ht=scontent-arn2-1.xx&oh=00_AfBiRLKCkfbjhGFXtvYLbEQ_EspmdWCcaQH8sdTX-yRx5w&oe=645F9504"
          className="PubU-Img"
        />
      </div>
    </>
  );
}

export default PubU;
