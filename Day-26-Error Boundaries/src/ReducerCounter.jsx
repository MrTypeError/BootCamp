function reducer(state, action) {
  if (action == "Decrease") {
    return state - 1;
  } else if (action == "Increase") {
    return state + 1;
  }
  return state;
}

export default reducer;
