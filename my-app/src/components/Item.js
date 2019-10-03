import React from "react";
import logo from "./img/gali.jpg"; // Tell Webpack this JS file uses this image
import "./css/item.css";

export default function Item({ index, done, title, dueDate, stats, usr }) {
  return (
    <li>
      <div className="warpper-list-item">
        <div className="start-warp">
          <div className=" check-item">
            <div
              className={`fas fa-check
              ${done ? " done-item " : " undone-item"}`}
            ></div>
          </div>
          <div className="item-title">{title}</div>
        </div>
        <div className="end-warp">
          <div className="date-item">{dueDate}</div>
          <div
            className={`status-item
          ${stats === "planning" ? "status-item-plan" : ""}
          ${stats === "in Beta" ? "status-item-beta" : ""}
          ${stats === "a/b test" ? "status-item-test" : ""}
        `}
          >
            {stats}
          </div>
          <div className="img-usr">
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </div>
    </li>
  );
}
