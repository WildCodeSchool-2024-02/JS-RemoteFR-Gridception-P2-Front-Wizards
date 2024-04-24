import NavBar from "../components/NavBar";
import Amel from "../assets/amelAvatar.png";
import Nico from "../assets/nicoAvatar.png";
import Rachel from "../assets/rachelAvatar.png";
import Seb from "../assets/sebAvatar.png";

function Creator() {
  return (
    <div className="creator-container">
      <NavBar />
      <h1>Fronts Wizards Team</h1>
      <div className="article-container">
        <article>
          <img src={Amel} alt="Portrait d'Amel" />
          <section className="creator-details">
            <h2>Amel</h2> <h3>House: </h3> <p>Gryffindor</p>
            <h3>Favorite spell:</h3>
            <p>Expelliarmus</p>
          </section>
        </article>

        <article>
          <img src={Nico} alt="Portrait de Nico" />
          <section className="creator-details">
            <h2>Nicolas</h2> <h3>House:</h3>
            <p> Slytherin</p>
            <h3>Favorite spell:</h3>
            <p>Sectumsempra</p>
          </section>
        </article>

        <article>
          <img src={Rachel} alt="Portrait de Rachel" />
          <section className="creator-details">
            <h2>Rachel</h2> <h3>House:</h3>
            <p>Hufflepuff</p>
            <h3>Favorite spell:</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </section>
        </article>

        <article>
          <img src={Seb} alt="Portrait de Seb" />
          <section className="creator-details">
            <h2>Sébastien</h2> <h3>House:</h3>
            <p>Slytherin</p>
            <h3>Favorite spell:</h3>
            <p>Obliviate</p>
          </section>
        </article>
      </div>
    </div>
  );
}

export default Creator;
