function Square({ value, onSquareClick }) {
  let element;
  if (value === "X") {
    element = <i className="fa-solid fa-2xl fa-x"></i>;
  } else if (value === "O") {
    element =<i className="fa-solid fa-2xl fa-o"></i>;
  }

  return (
    <div className="square" onClick={onSquareClick}>
      {element}
    </div>
  );
}

export default Square;
