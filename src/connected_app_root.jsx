import { connect } from "react-redux";

import AppRoot from "./app_root.jsx";
import change_action from "./change_action.js";

const ConnectedAppRoot = connect(
  state => ( state ),
  dispatch => ( { change_action: e => change_action(dispatch, { e: e }) } )
)(AppRoot);

export default ConnectedAppRoot;
