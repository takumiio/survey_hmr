/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from "react";
import { Provider } from "react-redux";

import change_action from "./change_action.js";
import ConnectedAppRoot from "./connected_app_root.jsx";


import configure_store from "./configure_store.js";
const store = configure_store();


const ProviderApp = () => (
  <Provider store={store}>
    <ConnectedAppRoot />
  </Provider>
);

export default ProviderApp;
