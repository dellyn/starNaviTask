import React, { useState, useEffect } from "react";
import Square from "./Square";
import Controls from "./Controls";
const areaSize = 400;

function Game({ data }) {
  const [hoverSquares, setHoverSquares] = useState([]);
  const [matrixData, setMatrixData] = useState([]);
  const [modeValue, setModeValue] = useState(null);
  const [canHover, setCanHover] = useState(false);
  const squareSize = areaSize / modeValue;

  useEffect(() => {
    setHoverSquares([]);
    setMatrixData(generateMatrix());
    setCanHover(false);
  }, [modeValue]);

  const onHover = (row, col, isActive) => {
    const newActiveElement = { row, col, isActive };

    if (isActive) {
      setHoverSquares((prevData) => [...prevData, newActiveElement]);
    } else {
      const index = hoverSquares.findIndex(
        (item) => item.row === row && item.col === col
      );
      const updatedData = [...hoverSquares];
      updatedData.splice(index, 1);
      setHoverSquares(updatedData);
    }
  };

  const generateMatrix = () => {
    const row = modeValue;
    const col = modeValue;

    const arr = [];
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        arr.push({ row: i, col: j });
      }
    }
    return arr;
  };

  const handleModeChange = (event) => {
    setModeValue(event.target.value);
  };

  const onStart = () => {
    modeValue && setCanHover(true);
  };

  return (
    <div className="game">
      <h1>MatrX</h1>
      {modeValue && (
        <div className="game-dash">
          <div className="matrix" style={{ width: areaSize, height: areaSize }}>
            {matrixData.map((item, idx) => {
              const uiid = idx + modeValue + (modeValue % 3);
              return (
                <Square
                  row={item.row}
                  col={item.col}
                  size={squareSize}
                  key={uiid}
                  onActive={onHover}
                  canHover={canHover}
                />
              );
            })}
          </div>
          <div className="hover-squares">
            <h2 className="title">Hover Squares</h2>
            <div className="scroll">
              {hoverSquares.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="scroll-item"
                  >{`Row: ${item.row} Column: ${item.col}`}</div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <Controls
        data={data}
        handleModeChange={handleModeChange}
        onStart={onStart}
        showBtn={modeValue && !canHover}
      />
    </div>
  );
}

export default Game;
