import React from "react";
import logo from "./img/gali.jpg"; // Tell Webpack this JS file uses this image
import "./style.css";

export default function Item({ index, done, title, dueDate, stat, usr }) {
  return (
    <li>
      <div className="warpper-list">
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
          ${stat === "planning" ? "status-item-plan" : ""}
          ${stat === "in Beta" ? "status-item-beta" : ""}
          ${stat === "a/b test" ? "status-item-test" : ""}
        `}
          >
            {stat}
          </div>
          <div className="img-usr">
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </div>
    </li>
  );
}
