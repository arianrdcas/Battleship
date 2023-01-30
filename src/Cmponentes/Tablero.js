import React, { useState } from "react";
import Botones from "./Botones";

const Tablero = () => {
  let gameBoard = [
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  ];

  const [elegir, setElegir] = useState("");

  return (
    <>
      <div className="tablero">
        {gameBoard.map((fila, i) => {
          return (
            <div key={i}>
              {fila.map((casilla, j) => {
                return (
                  <div
                    className="casilla"
                    style={{ background: elegir }}
                    key={j}
                    onClick={() => {
                      setElegir("red");
                    }}
                  >
                    {casilla} 
                  </div>
                );
              })}
            </div>
          );
        })}
      </div> 

      
      <Botones />
    </>
  );
};

export default Tablero;
