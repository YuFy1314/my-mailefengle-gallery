<template>
    <div id="home">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            <mu-container ref="container" class="demo-loadmore-content">
                <mu-load-more @refresh="refresh()" :refreshing="refreshing" :loading="loading" @load="load()">
                    <div class="myList">
                        <mu-list>
                            <template v-for="item in aGallery">
                                <mu-list-item>
                                    <img :src="item.images.large" :alt="item.title">
                                </mu-list-item>
                            </template>
                        </mu-list>
                        <mu-list>
                            <template v-for="item in aGallery">
                                <mu-list-item>
                                    <img :src="item.images.large" :alt="item.title">
                                </mu-list-item>
                            </template>
                        </mu-list>
                    </div>
                </mu-load-more>
            </mu-container>
        </mu-paper>
    </div>
</template>
<script>
export default {
    data() {
        return {
            refreshing: false,
            loading: false,
            aGallery: [],
            start: 0, // 分页使用表示第个数据
        }
    },
    mounted() {
        this.$nextTick(() => {
            let iMainHeight = $(window).height() - $('#header').height() - $('#footer').height();
            $('.main .demo-loadmore-wrap').css({
                height: iMainHeight + 'px'
            });
            this.initData();
        });
    },
    methods: {
        refresh() {
            this.refreshing = true;
            this.$refs.container.scrollTop = 0;
            setTimeout(() => {
                this.refreshing = false;
                this.aGallery = [];
                this.start = 0;
                this.initData();
            }, 2000)
        },
        load() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.start += 10;
                this.initData();
            }, 2000)
        },
        initData() {
            this.$http.jsonp('http://api.douban.com/v2/movie/top250?start=' + this.start + '&count=10')
                .then(response => {
                    for (let item of response.body.subjects) {
                        this.aGallery.push(item);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}

</script>
<style lang="less">
#home .demo-loadmore-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    .mu-appbar {
        width: 100%;
    }
    .demo-loadmore-content {
        flex: 1;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .container {
        padding: 0;
    }
    .myList {
        display: flex;
        .mu-list {
            margin: 2px;
            padding: 0;
        }
        .mu-list>li {
            margin-bottom: 4px;
        }
        .mu-item {
            height: auto;
            padding: 0;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}

</style>
