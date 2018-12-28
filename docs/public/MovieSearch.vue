<template>
    <div id="MovieSearch">
        <PageTop :PageTopOptions="PageTopOptions" @backout="backout()"></PageTop>
        <div class="content">
            <mu-chip class="demo-chip" @delete="handleClose" delete>
                default chip
            </mu-chip>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            PageTopOptions: {
                isShow: false,
                vSearch: ''
            },
            fromRouter: ''
        }
    },
    methods: {
        backout() {
            this.$router.push({
                name: this.fromRouter
            });
        },
        getMovie() {
            console.log(this.vSearch)
            this.$http.jsonp('https://api.douban.com/v2/movie/search?q=' + this.vSearch + '&apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=10')
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        handleClose() {
            window.confirm('确定要删除么');
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (from.name === 'Home') {
                vm.fromRouter = from.name;
            } else if (from.name === 'Discovery') {
                vm.fromRouter = from.name;
            } else if (from.name === 'Collect') {
                vm.fromRouter = from.name;
            }
        })
    }
}

</script>
<style lang="less">
#MovieSearch .content {
    padding: 50px 0;
    .demo-chip-wrapper {
        text-align: center;
    }
    .demo-chip {
        margin: 8px;
        vertical-align: middle;
    }
}

</style>
