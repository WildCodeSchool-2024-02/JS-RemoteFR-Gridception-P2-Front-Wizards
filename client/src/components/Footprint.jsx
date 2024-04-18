import footprints from "../assets/footprints.png";

function Footprint() {
  return (
    <div className="footprint-container">
      <img className="footprint" src={footprints} alt="footprint" />
      <img className="footprint" src={footprints} alt="footprint" />
      <img className="footprint" src={footprints} alt="footprint" />
      <img className="footprint" src={footprints} alt="footprint" />
      <img className="footprint" src={footprints} alt="footprint" />
    </div>
  );
}

export default Footprint;
