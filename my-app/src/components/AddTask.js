import React from "react";
import "./css/addBtn.css";

const AddTask = props => {
  return (
    <div className="warrper">
      <div className="warpper-add-task">
        <input type="button" className="btn-task btn" value="Add Task"></input>
      </div>
    </div>
  );
};

export default AddTask;
