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
              className={`fas fa-check fa-xs
              ${done ? " done-item " : " undone-item"}`}
            ></div>
          </div>
          <div
            className={`item-title 
          ${done ? "done-title" : "undone-title"}`}
          >
            <span>{title}</span>
          </div>
        </div>
        <div className="end-warp">
          <div className="container-end">
            <div className="date-item">{dueDate}</div>
            <div
              className={`status-item
          ${stats === "Planning" ? "status-item-plan" : ""}
          ${stats === "In Beta" ? "status-item-beta" : ""}
          ${stats === "A/B test" ? "status-item-test" : ""}
        `}
            >
              {stats}
            </div>
            <div className="img-usr">
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
