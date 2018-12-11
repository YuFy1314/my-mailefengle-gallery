<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/public/Header.vue';
import Footer from '@/public/Footer.vue';
export default {
    data() {
        return {
            theme: this.$store.state.theme
        }
    },
    mounted() {
        let oTheme = window.localStorage.getItem('oTheme');
        this.theme = oTheme ? oTheme : this.$store.state.theme;
        this.$exchangeTheme(this.theme);
    },
    components: {
        Header,
        Footer
    }
}

</script>
<style>


</style>
