import Vue from 'vue'
import Vuex from 'vuex'

import menu from './store/menu';
import comments from './store/comments';
import comment from './store/comment';

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    menu,
    comments,
    comment
  },
  strict: process.env.NODE_ENV !== 'production'
})
