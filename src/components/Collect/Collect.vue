<template>
    <div id="collect">
        <mu-paper :z-depth="5" class="demo-loadmore-wrap">
            <mu-container ref="container" class="demo-loadmore-content">
                <mu-load-more @refresh="refresh()" :refreshing="refreshing" :loading="loading" @load="load()">
                    <div class="myList">
                        <mu-list id="waterpull_left">
                            <template v-for="item in aGalleryLeft">
                                <mu-list-item>
                                    <img :src="item.images.large" :alt="item.title">
                                </mu-list-item>
                            </template>
                        </mu-list>
                        <mu-list id="waterpull_right">
                            <template v-for="item in aGalleryRight">
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
            aGalleryLeft: [],
            aGalleryRight: [],
        }
    },
    mounted() {
        this.$nextTick(() => {
            let iMainHeight = $(window).height() - $('#header').height() - $('#footer').height();
            $('.main .demo-loadmore-wrap').css({
                height: iMainHeight + 'px'
            });
        });
    },
    methods: {
        refresh() {
            this.refreshing = true;
            this.$refs.container.scrollTop = 0;
            setTimeout(() => {
                this.refreshing = false;
            }, 2000)
        },
        load() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 2000)
        }
    }
}

</script>
<style lang="less">
#collect .demo-loadmore-wrap {
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
