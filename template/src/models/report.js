import { get } from '@/utils/request';

export default {
  state: {
    data: {}
  },
  effects: dispatch => ({
    async getReport(payload = {}, rootState) {
      const data = await get('https://api.github.com/repos/hamger/mhg-templates/contents/templates.json', payload)
      dispatch({
        data: data
      })
    },
  })
};
