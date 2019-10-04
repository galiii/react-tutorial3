import React from "react";
import "./css/todo.css";
import List from "./List";
//import AddTask from "./AddTask";
//import FormTask from "./FormTask";

/* Will be removed */
const tasksTemp = [];
tasksTemp.push({
  dueDate: 1,
  done: true,
  title: "Defualt\t",
  stats: "Planning",
  usr: "img1"
});
tasksTemp.push({
  dueDate: 2,
  done: true,
  title: "another\tname",
  stats: "In Beta",
  usr: "img2"
});
tasksTemp.push({
  dueDate: 3,
  done: false,
  title: "Dan\ttask",
  stats: "A/B test",
  usr: "img3"
});
tasksTemp.push({
  dueDate: 4,
  done: true,
  title: "defualt: new task",
  stats: "In Beta",
  usr: "img4"
});
tasksTemp.push({
  dueDate: 5,
  done: false,
  title: "A long bl bla teast",
  stats: "Planning",
  usr: "img5"
});

tasksTemp.push({
  dueDate: 6,
  done: true,
  title: "defualt: new task",
  stats: "A/B test",
  usr: "img6"
});

tasksTemp.push({
  dueDate: 7,
  done: true,
  title: "defualt: new task",
  stats: "In Beta",
  usr: "img7"
});

/*
tasksTemp.push({
  dueDate: 8,
  done: false,
  title: "defualt: long", //long long long bbbbbbb",
  stats: "a/b test",
  usr: "img8"
});

tasksTemp.push({
  dueDate: 9,
  done: true,
  title: "defualt: new task",
  stats: "in Beta",
  usr: "img9"
});
*/
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasksTemp
    };
  }

  addTask = task => {
    this.setState({
      tasks: [task, ...this.state.tasks] //newTasks
    });
  };

  render() {
    return (
      <div className="warrper-list">
        {/*<div>Todo List App On React</div>*/}
        {/*<FormTask onSubmit={this.addTask} tasks={this.state.tasks} />*/}

        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default Todo;
