import React from "react";

const Select = (props) => {
  const { data, handleModeChange, onStart, showBtn } = props;

  return (
    <div className="controls">
      <select
        onChange={handleModeChange}
        className="select-mode"
        defaultValue="default"
      >
        <option disabled value="default">
          Pick Mode
        </option>
        {data.map((item, idx) => {
          return (
            <option key={idx} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
      {showBtn && (
        <button className="start-btn" onClick={onStart}>
          Start
        </button>
      )}
    </div>
  );
};

export default Select;
