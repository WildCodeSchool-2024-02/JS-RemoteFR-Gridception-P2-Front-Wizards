import footprints from "../assets/footprints.png";
import "../styles/Footprint2.scss";

function Footprint() {
  return (
    <div className="footprint2-container">
      <img className="footprint2" src={footprints} alt="footprint" />
      <img className="footprint2" src={footprints} alt="footprint" />
      <img className="footprint2" src={footprints} alt="footprint" />
      <img className="footprint2" src={footprints} alt="footprint" />
    </div>
  );
}

export default Footprint;
