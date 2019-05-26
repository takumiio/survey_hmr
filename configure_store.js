import { createStore } from "redux";
import reducer from "./reducer.js";

const configure_store = () => {
  const store = createStore(reducer);
  if ( module.hot ) {
    module.hot.accept("./reducer.js", () => store.replaceReducer(require("./reducer.js").default));
  }
  return store;
};

export default configure_store;
