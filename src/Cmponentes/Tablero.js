import React from 'react'
import Botones from './Botones';

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
  return (
    <>
      <div className="tablero">
        {gameBoard.map((fila, i) => {
          return (
            <div key={i}>
              {fila.map((casilla, j) => {
                return (
                  <button className="casilla" key={j}>
                    {casilla}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
      <Botones />
    </>
  );
}

export default Tablero


  