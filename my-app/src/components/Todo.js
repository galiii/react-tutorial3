import React from "react";
import "./style.css";
import List from "./List";
//import AddTask from "./AddTask";
import FormTask from "./FormTask";

/* Will be removed */
const tasksTemp = [];
tasksTemp.push({
  dueDate: 1,
  done: true,
  title: "Defualt\t",
  stat: "planning",
  usr: "img1"
});
tasksTemp.push({
  dueDate: 2,
  done: true,
  title: "another\tname",
  stat: "in Beta",
  usr: "img2"
});
tasksTemp.push({
  dueDate: 3,
  done: false,
  title: "Dan\ttask",
  stat: "a/b test",
  usr: "img3"
});
tasksTemp.push({
  dueDate: 4,
  done: true,
  title: "defualt: new task",
  stat: "in Beta",
  usr: "img4"
});

/*
const statusTemp = [
  { id: 1, title: "planning" },
  { id: 2, title: "in Beta" },
  { id: 3, title: "a/b test" }
];
*/
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasksTemp
    };
  }

  render() {
    return (
      <div className="App">
        <div>Todo List App On React</div>
        <FormTask />

        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default Todo;
