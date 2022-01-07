import React from "react";
import ReactDOM from "react-dom";


import Search from "./Search";
import Cities from "./Cities";
import Timestamp from "./Timestamp";
import Temperature from "./Temperature";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Search />
        <Cities />
        <Timestamp />
        <Temperature value={8} humidity={93} wind={5} description={5} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
