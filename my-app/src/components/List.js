import React from "react";
import "./style.css";
import Item from "./Item";

const List = ({ tasks }) => {
  return (
    <ul className="list">
      {tasks.map((item, index) => (
        <Item
          key={index}
          done={item.done}
          title={item.title}
          dueDate={item.dueDate}
          stat={item.stat}
          usr={item.usr}
        />
      ))}
    </ul>
  );
};

export default List;
