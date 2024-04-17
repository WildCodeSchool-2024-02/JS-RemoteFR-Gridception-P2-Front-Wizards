import hogwarts from "../assets/hogwarts.png";
import gryffindor from "../assets/gryffindor.png";
import slytherin from "../assets/slytherin.png";
import hufflepuff from "../assets/hufflepuff.png";
import ravenclaw from "../assets/ravenclaw.png";
import elixirs from "../assets/elixirs.png";
import spells from "../assets/spells.png";
import Footprint from "./Footprint";
import Footprint2 from "./Footprint2";
import Footprint3 from "./Footprint3";
import Footprint4 from "./Footprint4";

import "../styles/Banner.scss";

function Banner() {
  return (
    <>
      <section className="first-line">
        <article className="castle">
          <img src={hogwarts} alt="Hogwarts Castle" />
        </article>
        <Footprint />
        <article className="gryffindor">
          <img src={gryffindor} alt="Gryffindor Shield" />
        </article>
        <Footprint2 />
      </section>

      <section className="second-line">
        <article className="slytherin">
          <img src={slytherin} alt="Slytherin Shield" />
        </article>
        <Footprint3 />
        <article className="hufflepuff">
          <img src={hufflepuff} alt="Hufflepuff Shield" />
        </article>
        <article className="ravenclaw">
          <img src={ravenclaw} alt=" Ravenclaw Shield" />
        </article>
        <Footprint4 />
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
