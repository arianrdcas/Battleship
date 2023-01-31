import "./App.css";
import Tablero from "./Cmponentes/Tablero";

function App() {
  

  
  return (
    <>
      <h1>Battleship</h1>
      <div className="contendor-tableros">
        <Tablero />
        <Tablero />
      </div>
      
    </>
  );
}

export default App;
