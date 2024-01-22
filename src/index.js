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

document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.activeElement.click();
  }
});
