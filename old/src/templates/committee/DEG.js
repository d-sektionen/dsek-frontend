import "../../css/committee/DEG.css";
import DsekHeader from "../../components/committee/DsekHeader";

function DEG() {
  return (
    <>
      <DsekHeader />
      <div className="DEG">
        <h1 className="DEG-Title">DEG</h1>
        <hr />
        <p className="DEG-Content">
          <span className="Bold">DEG</span> är ett nytt koncept på sektionen,
          och är därför under aktiv uppbyggnad! I dagsläget består gruppen av
          sektionskassören och tre <span className="Bold">DEG</span>are.
          Huvuduppgiften är att avlasta kassören i det dagliga arbetet, då genom
          att bland annat hjälpa till med bokföring och fakturering.
        </p>
        <p className="DEG-Contact">
          Har du några frågor eller funderingar? Då kan du alltid kontakta{" "}
          <a href="mailto:deg@d-sektionen.se">deg@d-sektionen.se</a>
        </p>
      </div>
    </>
  );
}

export default DEG;
