import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import elixirs from "../assets/elixirs.png";
import spells from "../assets/spells.png";
import Footprint from "./Footprints";

function Modal6({ activation5, activation6, setActivation6 }) {
  const [toggle6, setToggle6] = useState(false);
  const [toggle7, setToggle7] = useState(false);

  const [elixir, setElixir] = useState([]);
  const [spell, setSpell] = useState({});

  const [randomSpell, setRandomSpell] = useState(null);
  const [randomElixir, setRandomElixir] = useState(null);

  const getRandomIndex = (array) => {
    if (array.length === 0) {
      return null;
    }
    return Math.floor(Math.random() * array.length);
  };
  const setRandomItem = useCallback((array, setter) => {
    if (!array || array.length === 0) {
      return setter(null);
    }
    const randomIndex = getRandomIndex(array);
    return setter(array[randomIndex]);
  }, []);

  useEffect(() => {
    axios.get("https://hp-api.onrender.com/api/spells").then((results) => {
      setSpell(results.data);
    });
  }, []);

  useEffect(() => {
    setRandomItem(spell, setRandomSpell);
  }, [setRandomItem, spell]);

  useEffect(() => {
    axios
      .get("https://wizard-world-api.herokuapp.com/Elixirs")
      .then((results) => {
        const filteredElixirs = results.data.filter(
          (elixirData) =>
            elixirData.effect &&
            elixirData.ingredients &&
            elixirData.ingredients.length
        );
        setElixir(filteredElixirs);
      });
  }, []);

  useEffect(() => {
    setRandomItem(elixir, setRandomElixir);
  }, [setRandomItem, elixir]);

  return (
    <section className="third-line">
      <article className="elixirs">
        {toggle6 ? (
          <div className="modal6">
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
            <h1>{randomElixir?.name}</h1>
            <h2 className="h-effect">Effect :</h2>
            <p>{randomElixir?.effect}</p>
            <h3>Ingredients :</h3>
            <ul>
              {randomElixir.ingredients &&
                randomElixir.ingredients.map((ingredient) => (
                  <li className="elixirList" key={ingredient.id}>
                    {ingredient.name}
                  </li>
                ))}
            </ul>
            <button
              type="button"
              className="random-button"
              onClick={() => {
                setRandomElixir(elixir[getRandomIndex(elixir)]);
                setToggle6(true);
              }}
            >
              Random Elixir
            </button>
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
          <div className="modal7">
            <button
              type="button"
              className="fermer"
              onClick={() => {
                setToggle7(false);
              }}
            >
              &#10005;
            </button>
            <h1>{randomSpell?.name}</h1>
            <h2 className="h-description">Description :</h2>
            <p>{randomSpell?.description}</p>
            <button
              type="button"
              className="random-button"
              onClick={() => {
                setRandomSpell(spell[getRandomIndex(spell)]);
                setToggle7(true);
              }}
            >
              Random Spell
            </button>
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
