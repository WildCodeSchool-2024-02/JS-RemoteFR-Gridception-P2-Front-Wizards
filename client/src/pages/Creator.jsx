import NavBar from "../components/NavBar";
import Amel from "../assets/amelAvatar.png";
import Nico from "../assets/nicoAvatar.png";
import Rachel from "../assets/rachelAvatar.png";
import Seb from "../assets/sebAvatar.png";
import github from "../assets/github.png";

function Creator() {
  return (
    <div className="creator-container">
      <NavBar />
      <h1 className="title-creator">The Fronts Wizards Team</h1>
      <div className="article-container">
        <article className="creator-amel">
          <img src={Amel} alt="Portrait d'Amel" />
          <h2 className="name">Amel</h2> <h3 className="h3-creator">House: </h3>{" "}
          <p className="text-creator">Gryffindor</p>
          <h3 className="h3-creator">Favorite spell</h3>
          <p className="text-creator">Expelliarmus</p>
        </article>

        <article className="creator-nico">
          <img src={Nico} alt="Portrait de Nico" />
          <h2 className="name">Nicolas</h2>{" "}
          <h3 className="h3-creator">House</h3>
          <p className="text-creator"> Slytherin</p>
          <h3 className="h3-creator">Favorite spell</h3>
          <p className="text-creator">Sectumsempra</p>
        </article>

        <article className="creator-rachel">
          <img src={Rachel} alt="Portrait de Rachel" />
          <h2 className="name">Rachel</h2> <h3 className="h3-creator">House</h3>
          <p className="text-creator">Hufflepuff</p>
          <h3 className="h3-creator">Favorite spell</h3>
          <p className="text-creator">Lorem ipsum dolor sit amet.</p>
        </article>

        <article className="creator-seb">
          <img src={Seb} alt="Portrait de Seb" />
          <h2 className="name">Sébastien</h2>{" "}
          <h3 className="h3-creator">House</h3>
          <p className="text-creator">Slytherin</p>
          <h3 className="h3-creator">Favorite spell</h3>
          <p className="text-creator">Obliviate</p>
        </article>
      </div>
      <footer className="footer">
        <img src={github} alt="logo github" />
        <p>Created with Magic by the Front Wizards</p>
      </footer>
    </div>
  );
}

export default Creator;
