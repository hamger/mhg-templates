export default {
  state: {
    count: 0
  },
  effects: dispatch => ({
    async addCount(payload = {count: 1}, rootState) {
      dispatch({
        count: rootState.home.count + payload.count
      });
    },
    async subCount(payload = {count: 1}, rootState) {
      dispatch({
        count: rootState.home.count - payload.count
      });
    },
  })
};
