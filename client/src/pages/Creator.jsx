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
          <h2>Amel</h2> <h3>House : Gryffindor</h3>
          <h3>Favorite spell</h3>
          <p>Expelliarmus</p>
        </article>

        <article>
          <img src={Nico} alt="Portrait de Nico" />
          <h2>Nicolas</h2> <h3>House : Slytherin</h3>
          <h3>Favorite spell</h3>
          <p>Sectumsempra</p>
        </article>

        <article>
          <img src={Rachel} alt="Portrait de Rachel" />
          <h2>Rachel</h2> <h3>House : Hufflepuff</h3>
          <h3>Favorite spell</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>

        <article>
          <img src={Seb} alt="Portrait de Seb" />
          <h2>Sébastien</h2> <h3>House : Slytherin</h3>
          <h3>Favorite spell</h3>
          <p>Obliviate</p>
        </article>
      </div>
    </div>
  );
}

export default Creator;
