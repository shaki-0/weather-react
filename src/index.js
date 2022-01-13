import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";

import Search from "./Search";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Search defaultCity="London" />
      </div>
      <a
        className="Git-link"
        href="https://github.com/shaki-0/weather-react-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Open source code by Shaki Obadina{" "}
      </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
