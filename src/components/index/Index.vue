<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '../../public/Header.vue';
import Footer from '../../public/Footer.vue';
export default {
    components: {
        Header,
        Footer
    }
}

</script>
<style>


</style>
