import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main className="container-home">
      <header>
        <h1 className="logo">Front Wizards</h1>
      </header>
      <Link to="/Map" className="button">YES</Link>
    </main>
  );
}

export default App;
