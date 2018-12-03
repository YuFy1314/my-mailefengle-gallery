import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        headerTitle: '主页',
        sidebar: {
            open: false, // 控制侧边栏是否展开
            docked: false // 设为 true， 将不会显示遮盖层，也不会触发 close 事件
        }
    },
    getters,
    mutations
});

export default store;
