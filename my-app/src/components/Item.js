import React from "react";

export default function Item({ index, done, title, dueDate, stat, usr }) {
  return (
    <li>
      <div className="item-list">
        <span className="item-done">{done.toString()}</span>
        <span className="item-title">{title}</span>
        <span className="item-date">{dueDate}</span>
        <span>{stat}</span>
        <span className="img-usr">{usr}</span>
      </div>
    </li>
  );
}
