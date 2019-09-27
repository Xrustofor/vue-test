import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.http.options.root = 'https://5cbef81d06a6810014c66193.mockapi.io/api/';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  data:{

  },
  render: h => h(App)
}).$mount('#app')
