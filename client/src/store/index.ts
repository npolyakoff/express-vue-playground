import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload.data;
    }
  },
  actions: {
    getPosts(context) {
      alert('getting posts')
      context.commit('SET_POSTS', { data: [{ title: '123', text: 'asd', createdAt: '22.55.11' }] });
    }
  },
  modules: {
  }
})
