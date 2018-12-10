import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Index = r => require.ensure([], () => r(require('@/components/index/Index.vue')), 'Index');
const Home = r => require.ensure([], () => r(require('@/components/Home/Home.vue')), 'Home');
const Discovery = r => require.ensure([], () => r(require('@/components/Discovery/Discovery.vue')), 'Discovery');
const Collect = r => require.ensure([], () => r(require('@/components/Collect/Collect.vue')), 'Collect');
const Theme = r => require.ensure([], () => r(require('@/components/Theme/Theme.vue')), 'Theme');

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/',
        name: 'Index',
        component: Index,
        children: [{
            path: 'home',
            name: 'Home',
            component: Home
        }, {
            path: 'discovery',
            name: 'Discovery',
            component: Discovery
        }, {
            path: 'collect',
            name: 'Collect',
            component: Collect
        }]
    }, {
        path: '/theme',
        name: 'Theme',
        component: Theme
    }]
});
