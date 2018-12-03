import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import store from './vuex/store';
import router from './router/router.js';
import App from './App.vue';
import MuseUI from 'muse-ui';
import './assets/css/reset.css';
import 'jquery';
import 'muse-ui/dist/muse-ui.css';
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(MuseUI); // 侧边栏滑动插件

var vm = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
