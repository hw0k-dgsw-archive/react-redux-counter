import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import modules from "./modules";
import { Provider } from "react-redux";

import App from "./containers/App";

import "normalize.css";

import "./styles/global.css";

const store = createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);