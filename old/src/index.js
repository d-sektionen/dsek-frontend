import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    document.activeElement.click();
  }
});

const temp = () => {
  console.log("is here");
  const elems = document.getElementsByClassName("dropdown");
  console.log(elems.length);
  for (let elem of elems) {
    elem.addEventListener("mouseout", function (event) {
      if (elem.classList.contains("no-dropdown")) {
        event.target.classList.replace("no-dropdown", "yes-dropdown");
      }
    });
    elem.addEventListener("mouseover", function (event) {
      if (elem.classList.contains("yes-dropdown")) {
        event.target.classList.replace("yes-dropdown", "no-dropdown");
      }
    });
  }
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    event.preventDefault();
    const active_elem = document.activeElement;
    if (
      active_elem.classList.contains("dropdown-nav-button") ||
      active_elem.classList.contains("nav-button")
    ) {
      const dropdown = active_elem.parentElement.parentElement;
      const new_elem = dropdown.children[0];
      new_elem.focus();
    }
    const elems = document.getElementsByClassName("dropdown-items");
    for (const e of elems) {
      e.style.display = "none";
    }
    temp();
  }
});
