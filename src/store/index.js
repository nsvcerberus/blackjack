import Vue from 'vue'
import Vuex from 'vuex'
import gameplay from './modules/gameplay/gameplay.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    gameplay
  }
})