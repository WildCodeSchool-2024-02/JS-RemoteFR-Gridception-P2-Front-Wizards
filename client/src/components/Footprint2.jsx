import footprints from "../assets/footprints.png";
import "../styles/Footprint2.scss";

function Footprint2() {
  return (
    <div className="footprint2-container">
      <img className="footprint2" src={footprints} alt="footprint" />
      <img className="footprint2" src={footprints} alt="footprint" />
      <img className="footprint2" src={footprints} alt="footprint" />
      <img className="footprint2" src={footprints} alt="footprint" />
    </div>
  );
}

export default Footprint2;
