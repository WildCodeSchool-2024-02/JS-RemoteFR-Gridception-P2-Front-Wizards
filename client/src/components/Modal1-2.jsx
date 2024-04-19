import { useEffect, useState } from "react";
import axios from "axios";
import hogwarts from "../assets/hogwarts.png";
import gryffindor from "../assets/gryffindor.png";
import Footprint from "./Footprint";
import Footprint2 from "./Footprint2";

function Modal1() {
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
              onClick={() => setToggle1(false)}
            >
              &#10005;
            </button>
            <h1>Hogwart Castle</h1>
            <h2 className="marg-castle">Description :</h2>
            <p>
              Hogwarts is a large, seven-storey castle, with numerous towers,
              staircases and deep dungeons. The castle was built by Godric
              Gryffindor, Helga Hufflepuff, Rowena Slytherin and Salazar
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
      <Footprint />
      <article className="gryffindor">
        {toggle2 ? (
          <div className="modal">
            <button
              type="button"
              className="fermer"
              onClick={() => setToggle2(false)}
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
            onClick={() => setToggle2(true)}
          >
            <img src={gryffindor} alt="Gryffindor Shield" />
          </button>
        )}
      </article>
      <Footprint2 />
    </section>
  );
}

export default Modal1;
