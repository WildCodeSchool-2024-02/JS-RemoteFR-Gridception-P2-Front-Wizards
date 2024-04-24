import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import elixirs from "../assets/elixirs.png";
import spells from "../assets/spells.png";
import Footprint from "./Footprints";

function Modal6({ activation5, activation6, setActivation6 }) {
  const [toggle6, setToggle6] = useState(false);
  const [toggle7, setToggle7] = useState(false);
  const [elixir, setElixir] = useState({});
  const [spell, setSpell] = useState({});

  useEffect(() => {
    axios.get("https://hp-api.onrender.com/api/spells").then((results) => {
      setSpell(results.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://wizard-world-api.herokuapp.com/Elixirs")
      .then((results) => {
        setElixir(results.data);
      });
  }, []);

  return (
    <section className="third-line">
      <article className="elixirs">
        {toggle6 ? (
          <div className="modal">
            <button
              type="button"
              className="fermer"
              onClick={() => {
                setToggle6(false);
                setActivation6(true);
              }}
            >
              &#10005;
            </button>
            <h1>{elixir[39]?.name}</h1>
            <h2 className="h-effect">Effect :</h2>
            <p>{elixir[39]?.effect}</p>
            <h3>Ingredients :</h3>
            <ul>
              <li>{elixir[39]?.ingredients[0].name}</li>
            </ul>
          </div>
        ) : (
          <button
            type="button"
            className="modal-click"
            onClick={activation5 ? () => setToggle6(true) : null}
          >
            <img src={elixirs} alt="elixirs-informations" />
          </button>
        )}
      </article>
      {activation6 ? <Footprint repetition={5} steps={6} /> : null}
      <article className="spells">
        {toggle7 ? (
          <div className="modal">
            <button
              type="button"
              className="fermer"
              onClick={() => {
                setToggle7(false);
              }}
            >
              &#10005;
            </button>
            <h1>{spell[23]?.name}</h1>
            <h2 className="h-description">Description :</h2>
            <p>{spell[23]?.description}</p>
          </div>
        ) : (
          <button
            className="modal-click"
            onClick={activation6 ? () => setToggle7(true) : null}
            type="button"
          >
            <img src={spells} alt="spells-informations" />
          </button>
        )}
      </article>
    </section>
  );
}

Modal6.propTypes = {
  activation5: PropTypes.bool.isRequired,
  activation6: PropTypes.bool.isRequired,
  setActivation6: PropTypes.bool.isRequired,
};

export default Modal6;
