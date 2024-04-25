import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Test1 from "./components/Cursor";

function App() {
  return (
    <div className="body-container">
      <Test1 />
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
