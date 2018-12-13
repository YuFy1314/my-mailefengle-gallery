import Vue from 'vue';

const PageTop = r => require.ensure([], () => r(require('./PageTop.vue')), 'PageTop');
const Modal = r => require.ensure([], () => r(require('./Modal.vue')), 'Modal');

Vue.component('PageTop', PageTop);
Vue.component('Modal', Modal);
