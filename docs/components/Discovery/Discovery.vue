<template>
    <div id="discovery">
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
                        <mu-list id="mylist" v-show="isGallery">
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
            isGallery: false,
            aGallery: [],
            aGalleryLeft: [],
            aGalleryRight: [],
            start: 0, // 分页使用表示第个数据
            iLeftTotal: 0, // 左瀑布流的高度
            iRightTotal: 0, // 右瀑布流的高度
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
        initData() {
            this.$http.jsonp('http://api.douban.com/v2/movie/top250?start=' + this.start + '&count=10')
                .then(response => {
                    for (let item of response.body.subjects) {
                        if (!this.aGalleryLeft.length) {
                            this.aGalleryLeft.push(item);
                            setTimeout(() => {
                                $('#waterpull_left .mu-item img').css({
                                    height: this.rnd(180, 220) + 'px'
                                });
                                this.iLeftTotal += $('#waterpull_left .mu-item img').height();
                            }, 0);
                        } else if (!this.aGalleryRight.length) {
                            this.aGalleryRight.push(item);
                            setTimeout(() => {
                                $('#waterpull_right .mu-item img').css({
                                    height: this.rnd(180, 220) + 'px'
                                });
                                this.iRightTotal += $('#waterpull_right .mu-item img').height();
                            }, 0);
                        } else {
                            setTimeout(() => {
                                // console.log(this.iLeftTotal, this.iRightTotal)
                                if (this.iLeftTotal <= this.iRightTotal) {
                                    this.aGalleryLeft.push(item);
                                    setTimeout(() => {
                                        this.iLeftTotal += $('#waterpull_left .mu-item img').height();
                                        // console.log(this.iLeftTotal)
                                        $('#waterpull_left .mu-item img').css({
                                            height: this.rnd(180, 220) + 'px'
                                        });
                                    }, 0);
                                    // console.log(this.iLeftTotal)
                                } else {
                                    this.aGalleryRight.push(item);
                                    setTimeout(() => {
                                        $('#waterpull_right .mu-item img').css({
                                            height: this.rnd(180, 220) + 'px'
                                        });
                                        this.iRightTotal += $('#waterpull_right .mu-item img').height();
                                    }, 0);
                                }
                            }, 0);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        rnd(n, m) {
            return Math.floor(Math.random() * (m - n) + n);
        },
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
        }
    }
}

</script>
<style lang="less">
#discovery .demo-loadmore-wrap {
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
