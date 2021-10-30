import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    _uid:""
  },
  mutations: {
    set_uid(state,uid){
      state._uid = uid;
    }
  },
  actions: {
  },
  modules: {
  }
})
