import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.js";

import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider.js";
import { initialState } from "./context/inititalState.js";
import reducer from "./context/reducer.js";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </Router>
  </React.StrictMode>
);
