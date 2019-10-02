import React from "react";
import "./list.css";
import Item from "./Item";

const List = ({ tasks }) => {
  return (
    <div className="list">
      <ul>
        {tasks.map((item, index) => (
          <Item
            key={index}
            done={item.done}
            title={item.title}
            dueDate={item.dueDate}
            stats={item.stats}
            usr={item.usr}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
