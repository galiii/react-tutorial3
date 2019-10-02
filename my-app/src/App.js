import React from "react";
//import logo from './logo.svg';
import mockup from "./mockup.png";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <div className="mockup">
        <img src={mockup} />
      </div>
      <div className="App-header">
        <Todo />
      </div>
    </div>
  );
}

export default App;
