import { Link } from "react-router-dom";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import "./styles/Buttons.scss";
import "./styles/Header.scss";
import "./App.scss";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Buttons />
      </div>
    </>
  );
}

export default App;

