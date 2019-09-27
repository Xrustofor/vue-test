import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import AboutUs from './views/AboutUs'
import WriteComment from './views/WriteComment'
import Comments from './views/Comments'
import Comment from './views/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'about_us'},
      beforeEnter(from, to, next){
        store.dispatch('comments/loadComments');
        next();
      }
    },
    {
      path: '/about-us',
      name: 'about_us',
      component: AboutUs,
      beforeEnter(from, to, next){
        store.dispatch('comments/loadComments');
        next();
      }
    },
    {
      path: '/write-comment/',
      name: 'write_comment',
      component: WriteComment,
    },
    {
      path: '/write-comment/:id',
      name: 'write_comment',
      component: WriteComment,
    },

    {
      path: '/comment/:id',
      name: 'write_comment',
      component: Comment,
    },

    {
      path: '/comments',
      name: 'comments',
      component: Comments,
      beforeEnter(from, to, next){
        store.dispatch('comments/loadComments');
        next();
      }
    },
  
  ],
  mode: 'history'
})
