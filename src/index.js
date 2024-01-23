import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    document.activeElement.click();
  }
});

//Escape sabbar alla andra eventListeners, har troligtvis att göra med att vi manipulerar style hoss vissa element

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    const active_elem = document.activeElement;
    if (active_elem.classList.contains("navButton")) {
      active_elem.parentElement.parentElement.parentElement.parentElement.children[0].focus();
      const elems = document.getElementsByClassName("dropdown-items");
      for (const e of elems){
        e.style.display = "none";
      }
    }
  }
});

