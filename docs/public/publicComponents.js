import Vue from 'vue';

const PageTop = r => require.ensure([], () => r(require('./PageTop.vue')), 'PageTop');
const Modal = r => require.ensure([], () => r(require('./Modal.vue')), 'Modal');
const Grid = r => require.ensure([], () => r(require('./Grid.vue')), 'Grid');
const AddressSelector = r => require.ensure([], () => r(require('./AddressSelector.vue')), 'AddressSelector');

Vue.component('PageTop', PageTop);
Vue.component('Modal', Modal);
Vue.component('Grid', Grid);
Vue.component('AddressSelector', AddressSelector);
