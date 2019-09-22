import React from "react";
import Item from "./Item";

const List = ({ tasks }) => {
  return (
    <div className="App-list">
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
    </div>
  );
};

export default List;
