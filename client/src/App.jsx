import Buttons from "./components/Buttons";
import Header from "./components/Header";
import "./styles/Buttons.scss";
import "./styles/Header.scss";
import "./App.scss";

function App() {
  return (
    <div className="body-container">
      <div>
        <Header />
      </div>
      <div>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
