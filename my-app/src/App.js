import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <div className=" App-header">
      <HelloWorld />
        <Counter />
        <Todo />

      </div>
      
    </div>
  );
}

export default App;
