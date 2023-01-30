import "./App.css";
import Botones from "./Cmponentes/Botones";
import Tablero from "./Cmponentes/Tablero";

function App() {
  return (
    <>
      <h1>Battleship</h1>
      <div className="contendor-tableros">
        <Tablero />
        <Tablero />
      </div>
      {/* <div>
        <Botones />
      </div> */}
      
    </>
  );
}

export default App;
