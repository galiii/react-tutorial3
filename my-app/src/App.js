import React from "react";
//import logo from './logo.svg';
import mockup from "./mockup.png";
import "./App.css";
import AddTask from "./components/AddTask";
import Todo from "./components/Todo";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <div className="mockup">
        <img src={mockup} />
      </div>
      <div className="App-header">
        <Title />
        <AddTask />
        <Todo />
      </div>
    </div>
  );
}

export default App;
