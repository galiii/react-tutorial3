import React from "react";
import List from "./List";

//const tt;
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
tasksTemp.push({
  dueDate: 5,
  done: false,
  title: "task 1",
  stat: "planning",
  usr: "img5"
});

tasksTemp.push({
  dueDate: 6,
  done: false,
  title: "this is a big bal bal bal bal bal",
  stat: "planning",
  usr: "img6"
});

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: tasksTemp }; //for now in order to focus on the css
  }

  render() {
    return (
      <div className="App">
        <div>Todo List App On React</div>
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default Todo;
