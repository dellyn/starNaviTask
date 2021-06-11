import React, { useState, useEffect } from "react";
import "./App.scss";
import Game from "./components/Game";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://demo1030918.mockable.io/")
      .then((res) => res.json())
      .then((json) => configDataFromApi(json));
  }, []);

  const configDataFromApi = (source) => {
    const arr = [];
    for (const key in source) {
      if (Object.hasOwnProperty.call(source, key)) {
        const element = source[key];
        arr.push({ name: key, value: element.field });
      }
    }
    setData(arr);
  };

  return (
    <div className="App">
      <div className="container">
        <Game data={data} />
      </div>
    </div>
  );
}

export default App;
