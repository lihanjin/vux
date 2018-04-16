import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login.js'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    login
  }
})