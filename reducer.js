const reducer = (state = { val: "hello!" }, action) => {
  switch ( action.type ) {
    case "CHANGE":
      return { ...state, val: action.payload.val };
    default:
      return state;
  }
};

export default reducer;
