const change_action = (dispatch, payload) => {
  dispatch({
    type: "CHANGE",
    payload: {
      val: payload.e.target.value,
    },
  });
}

export default change_action;
