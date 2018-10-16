import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

import home from './modules/home'
import app from './modules/app'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    app
  },
  getters,
  mutations,
  actions
})
