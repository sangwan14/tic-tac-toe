import { useState, useEffect } from "react";
import Header from "./Header";
import Setup from "./Setup";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    const newHistory = [...history.slice(0, nextMove + 1)];
    setHistory(newHistory);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <div key={move}>
        <button className="history-button" onClick={() => jumpTo(move)}>{description}</button>
      </div>
    );
  });

  return (
    <>
      <Header />
      <div className="game">
        <div className="invisible"></div>
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">{moves}</div>
      </div>
    </>
  );
}
