import { useState } from "react";
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

  return (
    <>
      <section className="first-line">
        <article className="castle">
          {toggle1 ? (
            <div className="modal">
              <h1>Info</h1>
              <ul>
                <li>Name</li>
                <li>Lastname</li>
                <li>Age</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat harum voluptatibus illo repellat odit eos unde rem
                facere dolorem. Consequuntur.
              </p>
              <button
                type="button"
                className="fermer"
                onClick={() => setToggle1(false)}
              >
                &#10005;
              </button>
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
              <h1>Info</h1>
              <ul>
                <li>Name</li>
                <li>Lastname</li>
                <li>Age</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat harum voluptatibus illo repellat odit eos unde rem
                facere dolorem. Consequuntur.
              </p>
              <button
                type="button"
                className="fermer"
                onClick={() => setToggle2(false)}
              >
                &#10005;
              </button>
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
              <h1>Info</h1>
              <ul>
                <li>Name</li>
                <li>Lastname</li>
                <li>Age</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat harum voluptatibus illo repellat odit eos unde rem
                facere dolorem. Consequuntur.
              </p>
              <button
                type="button"
                className="fermer"
                onClick={() => setToggle3(false)}
              >
                &#10005;
              </button>
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
              <h1>Info</h1>
              <ul>
                <li>Name</li>
                <li>Lastname</li>
                <li>Age</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat harum voluptatibus illo repellat odit eos unde rem
                facere dolorem. Consequuntur.
              </p>
              <button
                type="button"
                className="fermer"
                onClick={() => setToggle4(false)}
              >
                &#10005;
              </button>
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
              <h1>Info</h1>
              <ul>
                <li>Name</li>
                <li>Lastname</li>
                <li>Age</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat harum voluptatibus illo repellat odit eos unde rem
                facere dolorem. Consequuntur.
              </p>
              <button
                type="button"
                className="fermer"
                onClick={() => setToggle5(false)}
              >
                &#10005;
              </button>
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
              <h1>Info</h1>
              <ul>
                <li>Name</li>
                <li>Lastname</li>
                <li>Age</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat harum voluptatibus illo repellat odit eos unde rem
                facere dolorem. Consequuntur.
              </p>
              <button
                type="button"
                className="fermer"
                onClick={() => setToggle6(false)}
              >
                &#10005;
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
        <article className="spells">
          {toggle7 ? (
            <div className="modal">
              <h1>Info</h1>
              <ul>
                <li>Name</li>
                <li>Lastname</li>
                <li>Age</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat harum voluptatibus illo repellat odit eos unde rem
                facere dolorem. Consequuntur.
              </p>
              <button
                type="button"
                className="fermer"
                onClick={() => setToggle7(false)}
              >
                &#10005;
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
    </>
  );
}

export default Banner;
