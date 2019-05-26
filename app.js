import React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";

import change_action from "./change_action.js";


const App = (props) => (
  <div>
    <h1 className="title">
      { props.val }
    </h1>
    <div>
      <input
        type="text"
        onChange={ e => props.change_action(e) }
        value={ props.val }
      />
    </div>
  </div>
);

const ConnectedApp = connect(
  state => ( state ),
  dispatch => ( { change_action: e => change_action(dispatch, { e: e }) } )
)(App);


export default hot(module)( ConnectedApp );
