
const defaultState = {
  count: 0,
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_COUNT':
      return Object.assign({}, state, { count: state.count + 1 });
    case 'SUB_COUNT':
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
}

export default reducer;
