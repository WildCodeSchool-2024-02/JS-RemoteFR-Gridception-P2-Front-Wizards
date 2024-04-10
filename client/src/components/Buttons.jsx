import { useState } from "react";
import "./Buttons.scss";

function Buttons() {
  const [showNoButton, setShowNoButton] = useState(true);

  const handleYesButtonClick = () => {};

  const handleMouseEnter = () => {
    setShowNoButton(false);
  };

  const handleMouseLeave = () => {
    setShowNoButton(true);
  };

  return (
    <div
      className="button-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button type="button" onClick={handleYesButtonClick}>
        YES
      </button>
      {showNoButton && <button type="button">NO</button>}
    </div>
  );
}

export default Buttons;
