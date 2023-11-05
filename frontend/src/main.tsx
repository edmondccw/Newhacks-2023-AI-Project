import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component
import './styles/index.css'; // Global styles for your application

// If you're using a service worker and want to register it
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Assumes you have a div with id 'root' in your index.html
);

// If you're using a service worker and want to register it
// serviceWorker.unregister();
