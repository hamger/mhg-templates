import { getGithubInfo } from '@/apis/getInfo'

const vueRepoList = {
  state: {
    items: [],
    count: '',
    isLoading: true,
    waitingText: '加载中，请稍后...'
  },
  getters: {},
  actions: {
    getInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getGithubInfo().then(resp => {
          const items = resp.items
          const totalCount = resp.total_count
          if (items && items.length > 0) {
            commit('setItems', items)
            commit('setCount', totalCount)
            commit('setLoading', false)
          } else {
            reject(new Error('获取github vue项目列表失败'))
          }
          resolve(resp)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items
    },
    setCount: (state, totalCount) => {
      state.count = totalCount
    },
    setLoading: (state, val) => {
      state.isLoading = val
    }
  }
}

export default vueRepoList
