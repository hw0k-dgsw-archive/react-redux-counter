import React from "react";
import ReactDOM from "react-dom";

import store from "./store";
import { Provider } from "react-redux";

import App from "./containers/App";

import "normalize.css";

import "./styles/global.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);