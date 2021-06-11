import React, { useState } from "react";

const Square = (props) => {
  const [isActive, setIsActive] = useState(false);

  const onChange = () => {
    if (props.canHover) {
      setIsActive(!isActive);
      props.onActive(props.row, props.col, !isActive);
    }
  };

  return (
    <div
      data-row={props.row}
      data-col={props.col}
      style={{ width: props.size, height: props.size }}
      className={`square ${isActive && "active"}`}
      onMouseEnter={() => onChange()}
    ></div>
  );
};

export default Square;
