import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import store from '@/vuex/store';
import router from '@/router/router.js';
import App from '@/App.vue';
import MuseUI from 'muse-ui';
require('jquery');
require('@/assets/js/style.js'); // 公用样式
require('@/public/publicComponents.js'); // vue公共组件
require('@/plugins/publicPlugins.js'); // 公用插件
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(MuseUI); // 侧边栏滑动插件

var vm = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
