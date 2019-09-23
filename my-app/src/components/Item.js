import React from "react";

export default function Item({ index, done, title, dueDate, stat, usr }) {
  return (
    <li>
      <div className="warpper-list">
        <div className="start-warp">
          <div
            className={
              done
                ? "fas fa-check done-item check-item"
                : "fas fa-check undone-item check-item"
            }
          ></div>
          <div className="item-title">{title}</div>
        </div>
        <div className="end-warp">
          <div className="date-item">{dueDate}</div>
          <div
            className={`status-item
          ${stat === "planning" ? "status-item-plan" : ""}
          ${stat === "in Beta" ? "status-item-beta" : ""}
          ${stat === "a/b test" ? "status-item-test" : ""}
        `}
          >
            {stat}
          </div>
          <div className="img-usr">{usr}</div>
        </div>
      </div>
    </li>
  );
}
