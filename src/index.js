import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18
import './index.css';
import App from './components/App/App';

// Create the root element using the new React 18 API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
