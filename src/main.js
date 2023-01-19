import Vue from 'vue';
import App from './App.vue';
import './tailwind.css';
import store from '@/store/store';

import router from './router';
import VueRouter from 'vue-router';

import VCalendar from 'v-calendar';
import 'flowbite/dist/flowbite.min.js';

Vue.use(VueRouter);
Vue.use(VCalendar, {
  componentPrefix: 'vc', // Use <vc-calendar /> instead of <v-calendar />
});
Vue.config.productionTip = false;

new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount('#app');
