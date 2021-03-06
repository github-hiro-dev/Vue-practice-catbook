import Vue from 'vue'
import Vuex from 'vuex'
import product from '@/store/product.js'
import view from '@/store/view.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: '初期メッセージ'
  },
  getters: {
    message(state){return state.message}
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message
    }
  },
  actions: {
    doUpdate({ commit }, message) {
      commit('setMessage', {message})
    }
  },
  modules: {
    product: product,
    view: view
  }
})
