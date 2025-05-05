// Importing StrictMode from React to help detect potential problems in the app
import { StrictMode } from 'react';

// Importing createRoot from React DOM for rendering the React app
import { createRoot } from 'react-dom/client';

// Importing global CSS styles
import './index.css';

// Importing the main App component
import App from './App.jsx';

// Selecting the root HTML element and rendering the React app inside it
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Wraps App in StrictMode for extra checks in development */}
    <App />     {/* Renders the main App component */}
  </StrictMode>,
);
