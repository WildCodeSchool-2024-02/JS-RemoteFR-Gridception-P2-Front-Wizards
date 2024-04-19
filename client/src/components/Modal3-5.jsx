import { useEffect, useState } from "react";
import axios from "axios";
import slytherin from "../assets/slytherin.png";
import hufflepuff from "../assets/hufflepuff.png";
import ravenclaw from "../assets/ravenclaw.png";
import Footprint3 from "./Footprint3";
import Footprint4 from "./Footprint4";
import Footprint5 from "./Footprint5";

function Modal3() {
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [houses, setHouses] = useState({});

  useEffect(() => {
    axios
      .get("https://wizard-world-api.herokuapp.com/Houses")
      .then((results) => {
        setHouses(results.data);
      });
  }, []);

  return (
    <>
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
        <Footprint3 />
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
        <Footprint4 />
      </section>
      <Footprint5 />
    </>
  );
}

export default Modal3;
