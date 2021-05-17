import React from "react";
import ReactDOM from "react-dom";

import ToDoList from "./components/ToDoList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
