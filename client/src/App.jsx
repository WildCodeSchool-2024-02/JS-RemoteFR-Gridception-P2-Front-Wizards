import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="container">
      <header>
        <h1 className="logo">Harmonia</h1>
      </header>

      <nav className="navbar">
 <NavBar/>
      </nav>

      <section className="text-box">
        <h2 className="block-primary">
          <span className="block-primary-main">Harmonia</span>
          <span className="block-primary-sub">Votre framework JavaScript</span>
        </h2>
        <a
          href="https://documentation-harmonia.vercel.app/"
          className="btn btn-white btn-animated"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </section>

      <footer>
        Développé par la&nbsp;
        <a
          href="https://www.wildcodeschool.com/"
          className="wcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wild Code School
        </a>
      </footer>
    </main>
  );
}

export default App;
