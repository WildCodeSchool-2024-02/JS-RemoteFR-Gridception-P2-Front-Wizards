import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import elixirs from "../assets/elixirs.png";
import spells from "../assets/spells.png";
import Footprint6 from "./Footprint6";

function Modal6() {
  const [toggle6, setToggle6] = useState(false);
  const [toggle7, setToggle7] = useState(false);

  const [elixir, setElixir] = useState({});
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
        setElixir(results.data);
      });
  }, []);

  useEffect(() => {
    setRandomItem(elixir, setRandomElixir);
  }, [setRandomItem, elixir]);

  return (
    <section className="third-line">
      <article className="elixirs">
        {toggle6 ? (
          <div className="modal">
            <button
              type="button"
              className="fermer"
              onClick={() => setToggle6(false)}
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
                  <li key={ingredient.id}>{ingredient.name}</li>
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
            onClick={() => setToggle6(true)}
          >
            <img src={elixirs} alt="elixirs-informations" />
          </button>
        )}
      </article>
      <Footprint6 />
      <article className="spells">
        {toggle7 ? (
          <div className="modal">
            <button
              type="button"
              className="fermer"
              onClick={() => setToggle7(false)}
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
            onClick={() => setToggle7(true)}
            type="button"
          >
            <img src={spells} alt="spells-informations" />
          </button>
        )}
      </article>
    </section>
  );
}

export default Modal6;
