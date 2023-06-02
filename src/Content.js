import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import "./style.css";
//import Content from "./Mine";
import Content from "./anotherMine"
import {data} from "./donee"
function App() {
  return (
    <div className="App">
      <div className="App-body">
        <section className="dashboard">
          <Content />
        </section>
      </div>
    </div>
  );
}

export default App