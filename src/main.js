// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import Vuex from 'vuex'
import _store from './store/index'

Vue.use(Vuex);

Vue.use(ElementUI);

Vue.config.productionTip = false

const store = new Vuex.Store(_store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
