import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Todo from "./components/Todo";
import FormTask from "./components/FormTask";

function App() {
  return (
    <div className="App">
      <div className=" App-header">
        <Todo />
        <FormTask />
      </div>
    </div>
  );
}

export default App;
