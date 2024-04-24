import PropTypes from "prop-types";
import footprints from "../assets/footprints.png";

function Footprints({ repetition, steps }) {
  const footprintsArray = Array.from(
    { length: repetition },
    (_, index) => index + 1
  );

  return (
    <div className={`footprint${steps}-container`}>
      {footprintsArray.map(() => (
        <img
          key={`footstep-number-${Math.random() * 100}`}
          className={`footprint${steps}`}
          src={footprints}
          alt="footprint"
        />
      ))}
    </div>
  );
}

Footprints.propTypes = {
  repetition: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
};

export default Footprints;
