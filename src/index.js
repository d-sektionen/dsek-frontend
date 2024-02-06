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

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    const active_elem = document.activeElement;
    if (active_elem.classList.contains("dropdown-nav-button") || active_elem.classList.contains("nav-button")) {
      const new_elem = active_elem.parentElement.parentElement.children[0];
      new_elem.focus();
    }
    const elems = document.getElementsByClassName("dropdown-items");
    for (const e of elems){
      e.style.display = "none";
    }
  }
});

const elem = document.activeElement;
elem.addEventListener('mouseout', function(event) {
  
  event.target.style.backgroundColor = '';
})


