import Vue from 'vue';

const PageTop = r => require.ensure([], () => r(require('./PageTop.vue')), 'PageTop');

Vue.component('PageTop', PageTop);
