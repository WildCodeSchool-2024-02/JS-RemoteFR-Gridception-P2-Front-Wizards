import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import github from "../assets/github.png";
import goldenSnitch from "../assets/goldenSnitch.png";

import creatorCards from "../services/DataCreator";

function Creator() {
  const [toggleGolden, setToggleGolden] = useState(false);
  return (
    <div className="creator-container">
      <NavBar />
      <h1 className="title-creator">The Fronts Wizards Team</h1>
      <div className="article-container">
        {creatorCards.map((element) => (
          <article key={element.name} className={element.class}>
            <img src={element.img} alt={element.name} />
            <h2 className="name">{element.name}</h2>
            <h3 className="h3-creator">House</h3>
            <p className="text-creator">{element.house}</p>
            <h3 className="h3-creator">Favorite spell</h3>
            <p className="text-creator">{element.favoriteSpell}</p>
          </article>
        ))}
      </div>
      <footer className="footer">
        {toggleGolden ? (
          <div className="modal-of-golden">
            <button
              type="button"
              className="fermer"
              onClick={() => {
                setToggleGolden(false);
              }}
            >
              &#10005;
            </button>
            <h1>Golden Snitch</h1>
            <p>WELL DONE, YOU GET 1000 POINTS FOR YOUR HOUSE</p>
          </div>
        ) : (
          <button
            type="button"
            className="modal-click-golden"
            onClick={() => setToggleGolden(true)}
          >
            <img
              className="goldensnitch"
              src={goldenSnitch}
              alt="golden Snitch"
            />
          </button>
        )}
        <Link
          to="https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-Gridception-P2-Front-Wizards"
          key={Link}
          target="_blank"
        >
          <img src={github} alt="logo github" />
        </Link>
        <p>Created with Magic by the Front Wizards</p>
      </footer>
    </div>
  );
}

export default Creator;
