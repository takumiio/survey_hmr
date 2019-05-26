import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configure_store from "./configure_store.js";
import App from "./app.js";

const store = configure_store();
const app_el = document.getElementById("app");
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , app_el);
};


render();
