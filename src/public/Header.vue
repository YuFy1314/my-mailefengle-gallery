<template>
    <div>
        <main id="panel">
            <header id="header">
                <div class="toggle-button" @click="UPDATE_SIDEBAR_OPEN({open: open = !open})">
                    <img src="../assets/images/logo.png" />
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
            position: 'left'
        }
    },
    computed: {
        ...mapState(['headerTitle'])
    },
    methods: {
        ...mapMutations([
            'UPDATE_SIDEBAR_OPEN'
        ])
    },
    components: {
        Menu
    }
}

</script>
<style>
.mu-paper {
    background: -webkit-linear-gradient(left, #84c361, #3260af);
    background: -moz-linear-gradient(left, #84c361, #3260af);
    background: -o-linear-gradient(left, #84c361, #3260af);
    background: linear-gradient(left, #84c361, #3260af);
}

#header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    background: -webkit-linear-gradient(left, #84c361, #3260af);
    background: -moz-linear-gradient(left, #84c361, #3260af);
    background: -o-linear-gradient(left, #84c361, #3260af);
    background: linear-gradient(left, #84c361, #3260af);
}

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
