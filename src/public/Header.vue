<template>
    <div>
        <main id="panel">
            <header id="header">
                <div class="toggle-button" @click="UPDATE_SIDEBAR_OPEN({open: open = !open})">
                    <img :src="avatar" />
                </div>
                <div class="title">{{ headerTitle }}</div>
                <div class="search">
                    <img src="../assets/images/search.png" />
                </div>
            </header>
        </main>
        <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
            <Menu></Menu>
        </mu-drawer>
    </div>
</template>
<script>
import Menu from './Menu.vue';
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {
            open: this.$store.state.sidebar.open,
            docked: this.$store.state.sidebar.docked,
            position: 'left',
            avatar: require('../assets/images/logo.png'),
        }
    },
    mounted() {
        this.open = false;
        this.initData();
    },
    computed: {
        ...mapState(['headerTitle'])
    },
    methods: {
        ...mapMutations([
            'UPDATE_SIDEBAR_OPEN'
        ]),
        initData() {
            this.avatar = window.localStorage.getItem('avatar') || this.avatar;
        }
    },
    components: {
        Menu
    }
}

</script>
<style>
#header>div {
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#header .toggle-button img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}

#header .search img {
    width: 20px;
    height: 20px;
}

</style>
