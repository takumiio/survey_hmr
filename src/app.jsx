/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { Provider } from "react-redux";

import change_action from "./change_action.js";
import configure_store from "./configure_store.js";
import AppRoot from "./app_root.jsx";

const store = configure_store();


const HotApp = hot(module)(AppRoot)

const ConnectedApp = connect(
  state => ( state ),
  dispatch => ( { change_action: e => change_action(dispatch, { e: e }) } )
)(HotApp);

const ProviderApp = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

// export default hot(module)( ConnectedApp );
export default ProviderApp;
