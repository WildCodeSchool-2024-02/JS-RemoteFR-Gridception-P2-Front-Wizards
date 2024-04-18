import { useEffect, useState } from "react";
import axios from "axios";
import hogwarts from "../assets/hogwarts.png";
import gryffindor from "../assets/gryffindor.png";
import slytherin from "../assets/slytherin.png";
import hufflepuff from "../assets/hufflepuff.png";
import ravenclaw from "../assets/ravenclaw.png";
import elixirs from "../assets/elixirs.png";
import spells from "../assets/spells.png";
import "../styles/Banner.scss";

function Banner() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);
  const [toggle7, setToggle7] = useState(false);


  const [spell, setSpell] = useState({});
  const [houses, setHouses] = useState({});
  const [elixir, setElixir] = useState({});


  useEffect(() => {
    axios.get("https://hp-api.onrender.com/api/spells").then((results) => {
      setSpell(results.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://wizard-world-api.herokuapp.com/Houses")
      .then((results) => {
        setHouses(results.data);
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
    <>
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
                Gryffindor lived in the plains village of Godric's Hollow, and
                was the greatest duelist of his time. The Gryffindor emblem is
                the lion, considered the bravest of all creatures.
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
      </section>
      <section className="second-line">
        <article className="slytherin">
          {toggle3 ? (
            <div className="modal">
              <button
                type="button"
                className="fermer"
                onClick={() => setToggle3(false)}
              >
                &#10005;
              </button>
              <h1>{houses[3]?.name}</h1>
              <h2>Creator : {houses[3]?.founder}</h2>
              <h3>Description :</h3>
              <p>
                The house is named after Salazar Slytherin, one of the school's
                four founders. After its foundation, Salazar Slytherin
                instructed the Sorting Hat to select students for his house
                according to the characteristics he valued most. These include
                cunning, ambition and ingenuity.
              </p>
            </div>
          ) : (
            <button
              type="button"
              className="modal-click"
              onClick={() => setToggle3(true)}
            >
              <img src={slytherin} alt="Slytherin Shield" />
            </button>
          )}
        </article>
        <article className="hufflepuff">
          {toggle4 ? (
            <div className="modal">
              <button
                type="button"
                className="fermer"
                onClick={() => setToggle4(false)}
              >
                &#10005;
              </button>
              <h1>{houses[2]?.name}</h1>
              <h2>Creator : {houses[2]?.founder}</h2>
              <h3>Description :</h3>
              <p>
                Students belonging to this house are known to be loyal, patient,
                kind, modest, hard-working, fair-play, persevering, with a sense
                of justice, sincere, tolerant, and with a love of nature.
                Although Hufflepuff are hard-working people who have produced
                some brilliant wizards and witches, they are not as competitive
                as other competitive as other houses and remain modest about
                their their achievements. Hufflepuff is thus the most inclusive
                of the other four houses: it values hard work, dedication hard
                work, dedication, patience, loyalty and fair play, rather than
                any particular rather than any particular ability.
              </p>
            </div>
          ) : (
            <button
              type="button"
              className="modal-click"
              onClick={() => setToggle4(true)}
            >
              <img src={hufflepuff} alt="Hufflepuff Shield" />
            </button>
          )}
        </article>
        <article className="ravenclaw">
          {toggle5 ? (
            <div className="modal">
              <button
                type="button"
                className="fermer"
                onClick={() => setToggle5(false)}
              >
                &#10005;
              </button>
              <h1>{houses[1]?.name}</h1>
              <h2>Creator : {houses[1]?.founder}</h2>
              <h3>Descritpion :</h3>
              <p>
                House Slytherin rewards learning, wisdom, wit and intellect in
                its members. As a result, many Slytherins tend to be motivated
                and talented students. They also pride themselves on being
                original in their ideas and methods.
              </p>
            </div>
          ) : (
            <button
              type="button"
              className="modal-click"
              onClick={() => setToggle5(true)}
            >
              <img src={ravenclaw} alt=" Ravenclaw Shield" />
            </button>
          )}
        </article>
      </section>
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
              onClick={() => setToggle6(true)}
            >
              <img src={elixirs} alt="elixirs-informations" />
            </button>
          )}
        </article>
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
              <h1>{spell[23]?.name}</h1>
              <h2 className="h-description">Description :</h2>
              <p>{spell[23]?.description}</p>
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
    </>
  );
}

export default Banner;
