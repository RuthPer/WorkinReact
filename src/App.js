// Is used to  that you can call from your component to let it “remember” things.
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
function position() {}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // This makes it so that we are checking to see if whech spaces equal each other
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
// export JavaScript keyword makes this function accessible outside of this file.
//The default keyword tells other files using your code that it’s the main function in your file.

export default function Board() {
  function handleClick(i) {
    // This makes sure that we stop and once there is just one value
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    // This is an if statement so that we can flip values
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext); //This makes sure that that after this happens the value is reset after
  }
  //THis will also us to understand the state of the squares
  // This saves the constants of the for tic tac toe squre into a array of length 9
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  // Button classname=Button is a html tag for displaying buttons
  // React components can only return single JSX elements like buttons

  //This is to display the winners
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    // Is how to make fragrments
    // We will render here by making a function for the squares

    // => means {() => handleClick(0)} is an arrow function that calls handleClick(0) when the square is clicked.

    // handleClick(0) is a function that updates the board when the square is clicked.
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
// So we now make it so the sqares can each be clicked
// The null passed to useState is used as the initial value for this state variable,
