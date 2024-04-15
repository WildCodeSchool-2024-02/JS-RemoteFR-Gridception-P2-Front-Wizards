import hogwarts from "../assets/hogwarts.png";
import gryffindor from "../assets/gryffindor.png";
import slytherin from "../assets/slytherin.png";
import hufflepuff from "../assets/hufflepuff.png";
import ravenclaw from "../assets/ravenclaw.png";
import elixirs from "../assets/elixirs.png";
import spells from "../assets/spells.png";

import "../styles/Banner.scss";

function Banner() {
  return (
    <>
      <section className="first-line">
        <article className="castle">
          <img src={hogwarts} alt="Hogwarts Castle" />
        </article>
        <article className="gryffindor">
          <img src={gryffindor} alt="Gryffindor Shield" />
        </article>
      </section>
      <section className="second-line">
        <article className="slytherin">
          <img src={slytherin} alt="Slytherin Shield" />
        </article>
        <article className="hufflepuff">
          <img src={hufflepuff} alt="Hufflepuff Shield" />
        </article>
        <article className="ravenclaw">
          <img src={ravenclaw} alt=" Ravenclaw Shield" />
        </article>
      </section>
      <section className="third-line">
        <article className="elixirs">
          <img src={elixirs} alt="elixirs-informations" />
        </article>
        <article className="spells">
          <img src={spells} alt="spells-informations" />
        </article>
      </section>
    </>
  );
}

export default Banner;
