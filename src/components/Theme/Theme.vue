<template>
    <div id="theme">
        <PageTop :PageTopOptions="PageTopOptions" @backout="backout()"></PageTop>
        <div class="content">
            <div class="row">
                <div class="col-xs-5" v-for="item in aTheme">
                    <img :src="item.src" class="img-thumbnail">
                    <p class="detail">{{ item.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            PageTopOptions: {
                title: '个性主题'
            },
            aTheme: [{
                src: '../../assets/images/theme-default.png',
                title: '默认主题'
            }, {
                src: '../../assets/images/theme-custom.png',
                title: '自定义主题'
            }]
        }
    },
    methods: {
        backout() {
            this.$router.back(1);
        }
    }
}

</script>
<style>
#theme .content {
    padding-top: 20px;
}

#theme .row {
    display: flex;
    justify-content: center;
}

#theme .row>div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>
