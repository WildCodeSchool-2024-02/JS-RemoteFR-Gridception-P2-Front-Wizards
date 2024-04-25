import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import hogwarts from "../assets/hogwarts.png";
import gryffindor from "../assets/gryffindor.png";
import Footprint from "./Footprints";

function Modal1({ activation, setActivation, activation2, setActivation2 }) {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [houses, setHouses] = useState({});

  useEffect(() => {
    axios
      .get("https://wizard-world-api.herokuapp.com/Houses")
      .then((results) => {
        setHouses(results.data);
      });
  }, []);

  return (
    <section className="first-line">
      <article className="castle">
        {toggle1 ? (
          <div className="modal">
            <button
              type="button"
              className="fermer"
              onClick={() => {
                setToggle1(false);
                setActivation(true);
              }}
            >
              &#10005;
            </button>
            <h1>Hogwart Castle</h1>
            <h2 className="marg-castle">Description :</h2>
            <p>
              Hogwarts is a large, seven-storey castle, with numerous towers,
              staircases and deep dungeons. The castle was built by Godric
              Gryffindor, Helga Hufflepuff, Rowena Ravenclaw and Salazar
              Slytherin.
            </p>
          </div>
        ) : (
          <button
            type="button"
            className="modal-click"
            onClick={() => setToggle1(true)}
          >
            <img src={hogwarts} alt="Hogwarts Castle" />
          </button>
        )}
      </article>
      {activation ? <Footprint repetition={5} steps={1} /> : null}
      <article className="gryffindor">
        {toggle2 ? (
          <div className="modal">
            <button
              type="button"
              className="fermer"
              onClick={() => {
                setToggle2(false);
                setActivation2(true);
              }}
            >
              &#10005;
            </button>
            <h1>{houses[0]?.name}</h1>
            <h2>Creator : {houses[0]?.founder}</h2>
            <h3>Descritpion :</h3>
            <p>
              Gryffindor lived in the plains village of Godric's Hollow, and was
              the greatest duelist of his time. The Gryffindor emblem is the
              lion, considered the bravest of all creatures.
            </p>
          </div>
        ) : (
          <button
            type="button"
            className="modal-click"
            onClick={activation ? () => setToggle2(true) : null}
          >
            <img src={gryffindor} alt="Gryffindor Shield" />
          </button>
        )}
      </article>
      {activation2 ? <Footprint repetition={4} steps={2} /> : null}
    </section>
  );
}

Modal1.propTypes = {
  activation: PropTypes.bool.isRequired,
  setActivation: PropTypes.bool.isRequired,
  activation2: PropTypes.bool.isRequired,
  setActivation2: PropTypes.bool.isRequired,
};

export default Modal1;
