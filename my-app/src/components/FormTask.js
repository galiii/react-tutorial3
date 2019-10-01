import React from "react";
import "./style.css";

class FormTask extends React.Component {
  state = {
    title: "New Task",
    done: false,
    stats: "",
    dueDate: new Date().toLocaleString()
  };

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    });
    console.log("The title is ", this.state.title);
  };

  handleStatusChange = event => {
    this.setState({
      stats: event.target.value
    });
    console.log("The stats is ", this.state.stats);
  };

  render() {
    return (
      <div className="add-task">
        <form>
          <div>Add New Task</div>
          <label htmlFor="title">
            Add title:
            <input
              id="title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </label>

          <label htmlFor="date">
            Date {this.state.dueDate}
            <input id="dueDate" type="date" step="7"></input>
          </label>
          <label htmlFor="stats">
            Choose status:
            <select
              id="stats"
              value={this.state.stats}
              onChange={this.handleStatusChange}
              onBlur={this.handleStatusChange}
            >
              <option>All</option>

              {["in Beta", "planning", "a/b test"].map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default FormTask;
