import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 标签栏活动标签
    tabsActiveName: 'home',
    // 详情 id
    detailId: 0,
    path: '/homepage',
    StrCartData: {}
  },
  mutations: {
    StrChangeTabbar(state, name) {
      state.tabsActiveName = name
    },
    StrGetDetailID(state, id) {
      window.sessionStorage.setItem('detailId', id)
      state.detailId = id
    },
    StrGetRouter(state, path) {
      window.sessionStorage.setItem('path', path)
      state.path = window.sessionStorage.getItem('path')
    },
    StrSaveCartData(state, cartData) {
      state.StrCartData = cartData
    }
  },
  actions: {
  },
  modules: {
  }
})
