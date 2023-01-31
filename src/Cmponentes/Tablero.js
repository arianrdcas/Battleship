import React, { useState } from "react";
//import Botones from "./Botones";

const Tablero = () => {
  let gameBoardMostrar = [
    ["B", "", "", "", "", "", "", "", "", ""],
    ["B", "", "", "", "", "", "", "", "", ""],
    ["B", "", "", "", "", "", "", "B", "", ""],
    ["", "", "", "", "", "", "", "B", "", ""],
    ["", "", "", "", "", "", "", "B", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "B", "B", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];

  //console.log(gameBoard[0][1]);
  //const [color, setColor] = useState("");

  return (
    <>
      <div className="tablero">
        {gameBoardMostrar.map((arr, i) => {
          return (
            <div key={i}>
              {arr.map((fila, j) => {
                return (
                  <div key={j}>
                    <div
                      id={fila}
                      className="elemento"
                      //style={{ background: elegir }}

                      onClick={(e) => {
                        if (fila === "") {
                          e.target.style.background = "white";
                          console.log(fila);
                        } else {
                          e.target.style.background = "red";
                          console.log(fila);
                        }
                      }}
                    >
                      {fila}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="botones">
        <button className="btn">Mostrar barcos</button>
      </div>
    </>
  );
};

export default Tablero;
