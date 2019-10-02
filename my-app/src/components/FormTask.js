import React from "react";
import "./style.css";

class FormTask extends React.Component {
  //console.log(props.tasks);
  state = {
    title: "New Task",
    done: false,
    stats: "",
    dueDate: 7
  };

  /* The Title input */
  handleTitleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    //console.log("The title is ", this.state.title);
  };

  /* The status change */
  handleStatusChange = event => {
    this.setState({
      stats: event.target.value
    });
    //console.log("The stats is ", this.state.stats);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      dueDate: this.props.tasks.length + 1,
      done: false,
      title: this.state.title,
      stats: this.state.stats,
      usr: "img3"
    });

    this.setState({
      title: "New Task",
      done: false,
      stats: "",
      dueDate: 0
    });
  };

  render() {
    return (
      <div className="add-task">
        <form onSubmit={this.handleFormSubmit}>
          <div className="title-form">Add New Task</div>
          <div className="contact-form">
            <label htmlFor="title">
              <p>Add title:</p>
              <input
                id="title"
                name="title"
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </label>
            <label htmlFor="stats">
              <p>Choose status:</p>
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
          </div>
          <button>Submmit</button>
        </form>
      </div>
    );
  }
}

export default FormTask;
