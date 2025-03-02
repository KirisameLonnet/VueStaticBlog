import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store'; // 引入 Vuex store

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store, // 使用 Vuex store
  render: h => h(App)
}).$mount('#app');
