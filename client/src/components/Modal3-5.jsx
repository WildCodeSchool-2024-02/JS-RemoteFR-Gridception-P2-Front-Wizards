import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import slytherin from "../assets/slytherin.png";
import hufflepuff from "../assets/hufflepuff.png";
import ravenclaw from "../assets/ravenclaw.png";
import Footprint from "./Footprints";

function Modal3({
  activation2,
  activation3,
  setActivation3,
  activation4,
  setActivation4,
  activation5,
  setActivation5,
}) {
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
            <div className="modal3">
              <button
                type="button"
                className="fermer"
                onClick={() => {
                  setToggle3(false);
                  setActivation3(true);
                }}
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
              onClick={activation2 ? () => setToggle3(true) : null}
            >
              <img src={slytherin} alt="Slytherin Shield" />
            </button>
          )}
        </article>
        {activation3 ? <Footprint repetition={5} steps={3} /> : null}
        <article className="hufflepuff">
          {toggle4 ? (
            <div className="modal4">
              <button
                type="button"
                className="fermer"
                onClick={() => {
                  setToggle4(false);
                  setActivation4(true);
                }}
              >
                &#10005;
              </button>
              <h1>{houses[2]?.name}</h1>
              <h2>Creator : {houses[2]?.founder}</h2>
              <h3>Description :</h3>
              <p>
                Hufflepuff valued hard work, dedication, patience, loyalty, and
                fair play.Its emblematic animal was the badger, its
                representative gemstone was yellow diamonds, and yellow and
                black were its colours. Pomona Sprout was the Head of Hufflepuff
                during 1991–1998, Sprout left the post of Head of Hufflepuff and
                Herbology Professor sometime before 2017 and her successor for
                the position of Head of Hufflepuff was currently unknown. The
                Fat Friar was its ghost.
              </p>
            </div>
          ) : (
            <button
              type="button"
              className="modal-click"
              onClick={activation3 ? () => setToggle4(true) : null}
            >
              <img src={hufflepuff} alt="Hufflepuff Shield" />
            </button>
          )}
        </article>
        <article className="ravenclaw">
          {toggle5 ? (
            <div className="modal5">
              <button
                type="button"
                className="fermer"
                onClick={() => {
                  setToggle5(false);
                  setActivation5(true);
                }}
              >
                &#10005;
              </button>
              <h1>{houses[1]?.name}</h1>
              <h2>Creator : {houses[1]?.founder}</h2>
              <h3>Descritpion :</h3>
              <p>
                Ravenclaw valued intelligence, knowledge, curiosity, creativity
                and wit. Its emblematic animal was the eagle, its representative
                gemstone was sapphires, and its colours were blue and bronze.
                The Ravenclaw Head of House in the 1990s was Filius Flitwick.
                The ghost of Ravenclaw was the Grey Lady, who was the daughter
                of Rowena Ravenclaw, the House's founder.
              </p>
            </div>
          ) : (
            <button
              type="button"
              className="modal-click"
              onClick={activation4 ? () => setToggle5(true) : null}
            >
              <img src={ravenclaw} alt=" Ravenclaw Shield" />
            </button>
          )}
        </article>
        {activation4 ? <Footprint repetition={5} steps={4} /> : null}
      </section>
      {activation5 ? <Footprint repetition={5} steps={5} /> : null}
    </>
  );
}

Modal3.propTypes = {
  activation2: PropTypes.bool.isRequired,
  activation3: PropTypes.bool.isRequired,
  setActivation3: PropTypes.bool.isRequired,
  activation4: PropTypes.bool.isRequired,
  setActivation4: PropTypes.bool.isRequired,
  activation5: PropTypes.bool.isRequired,
  setActivation5: PropTypes.bool.isRequired,
};

export default Modal3;
