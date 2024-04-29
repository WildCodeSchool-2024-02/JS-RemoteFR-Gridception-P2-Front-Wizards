import { useState } from "react";
import { Link } from "react-router-dom";

function Buttons() {
  const [showNoButton, setShowNoButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleYesButtonClick = () => {};

  const handleMouseEnter = () => {
    setShowNoButton(false);
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowNoButton(false);
    setShowMessage(true);
  };

  return (
    <>
      <div className="button-container">
        <button type="button" onClick={handleYesButtonClick}>
          <Link to="/Map" className="link-yes">
            YES
          </Link>
        </button>
        {showNoButton && (
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            type="button"
          >
            NO
          </button>
        )}
      </div>
      <div>
        {showMessage && (
          <h1
            className="message-nogood"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            We already know that you're up to no good !
          </h1>
        )}
      </div>
    </>
  );
}

export default Buttons;
