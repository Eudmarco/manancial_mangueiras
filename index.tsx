import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerAgentTools } from './webmcp';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// No build o HTML já vem pré-renderizado (scripts/prerender.mjs); no `vite dev` o root só tem o marcador <!--app-html-->.
if (rootElement.firstElementChild) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}

registerAgentTools();
