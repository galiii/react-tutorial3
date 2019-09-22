import React from "react";

export default function Item({ index, done, title, dueDate, stat, usr }) {
  return (
    <li>
      <div className="item-list">
        <span
          className={
            done
              ? "fas fa-check done-item check-item"
              : "fas fa-check undone-item check-item"
          }
        ></span>
        <span className="item-title">{title}</span>
        <span>{dueDate}</span>
        <span className="status-item">{stat}</span>
        <span className="img-usr">{usr}</span>
      </div>
    </li>
  );
}
