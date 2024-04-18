import footprints from "../assets/footprints.png";
import "../styles/Footprint3.scss";

function Footprint3() {
  return (
    <div className="footprint3-container">
      <img className="footprint3" src={footprints} alt="footprint" />
      <img className="footprint3" src={footprints} alt="footprint" />
      <img className="footprint3" src={footprints} alt="footprint" />
      <img className="footprint3" src={footprints} alt="footprint" />
      <img className="footprint3" src={footprints} alt="footprint" />
    </div>
  );
}

export default Footprint3;
