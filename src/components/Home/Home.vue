<template>
    <div id="home">
        <mu-carousel hide-controls interval="3000">
            <mu-carousel-item v-for="(item, index) in aBanner" :key="index">
                <a href="javascript:;" title="">
                    <img :src="item.src" :alt="item.alt">
                </a>
            </mu-carousel-item>
        </mu-carousel>
        <Grid ref="grid1" :gridOptions="gridOptions1" @viewMore="starHotMovie" @getMovieInfo="getHotMovieInfo"></Grid>
        <Grid ref="grid2" :gridOptions="gridOptions2" @viewMore="starComingMovie" @getMovieInfo="getComingMovieInfo"></Grid>
        <Grid ref="grid3" :gridOptions="gridOptions3" @viewMore="starWordofMouthMovie" @getMovieInfo="getWordofMouthMovieInfo"></Grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            aBanner: [{
                src: require('../../assets/images/banner.jpg'),
                alt: '轮播图1'
            }, {
                src: require('../../assets/images/banner-01.jpg'),
                alt: '轮播图2'
            }, {
                src: require('../../assets/images/banner-02.jpg'),
                alt: '轮播图3'
            }, {
                src: require('../../assets/images/banner-03.jpg'),
                alt: '轮播图4'
            }],
            gridOptions1: {
                title: '正在热映',
                aGridList: []
            },
            gridOptions2: {
                title: '即将上映',
                aGridList: []
            },
            gridOptions3: {
                title: '口碑榜',
                aGridList: []
            },
            aHotData: [], // 交互过来的正在热映的数据
            aComingData: [], // 交互过来的即将上映的数据
            aWordofMouthData: [], // 交互过来的口碑榜的数据
        }
    },
    mounted() {
        this.initHotData();
        this.initComingData();
        this.initWordofMouthData();
    },
    methods: {
        initHotData() {
            this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?start=0&count=10')
                .then(response => {
                    let aData = response.body.subjects;
                    this.aHotData = aData;
                    for (let i = 0; i < aData.length; i++) {
                        let obj = {};
                        obj.id = aData[i].id;
                        obj.src = aData[i].images.large;
                        obj.title = aData[i].title;
                        obj.name = aData[i].casts[0].name;
                        this.gridOptions1.aGridList.push(obj);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        initComingData() {
            this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon?start=0&count=10')
                .then(response => {
                    let aData = response.body.subjects;
                    this.aComingData = aData;
                    for (let i = 0; i < aData.length; i++) {
                        let obj = {};
                        obj.id = aData[i].id;
                        obj.src = aData[i].images.large;
                        obj.title = aData[i].title;
                        obj.name = aData[i].casts[0].name;
                        this.gridOptions2.aGridList.push(obj);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        initWordofMouthData() {
            this.$http.jsonp('https://api.douban.com/v2/movie/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b')
                .then(response => {
                    let aData = response.body.subjects;
                    this.aWordofMouthData = aData;
                    for (let i = 0; i < aData.length; i++) {
                        let obj = {};
                        obj.id = aData[i].subject.id;
                        obj.src = aData[i].subject.images.large;
                        obj.title = aData[i].subject.title;
                        obj.name = aData[i].subject.casts[0].name;
                        this.gridOptions3.aGridList.push(obj);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getHotMovieInfo(id) {
            this.aHotData.forEach((obj) => {
                if (obj.id === id) {
                    this.$router.push({
                        name: 'MovieDetail',
                        params: obj
                    });
                }
            });
        },
        getComingMovieInfo(id) {
            this.aComingData.forEach((obj) => {
                if (obj.id === id) {
                    this.$router.push({
                        name: 'MovieDetail',
                        params: obj
                    });
                }
            });
        },
        getWordofMouthMovieInfo(id) {
            this.aWordofMouthData.forEach((obj) => {
                if (obj.subject.id === id) {
                    this.$router.push({
                        name: 'MovieDetail',
                        params: obj
                    });
                }
            });
        }
    }
}

</script>
<style lang="less">
#home {
    .mu-carousel {
        height: 200px;
        z-index: 9;
        .mu-carousel-item a {
            display: block;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .gridlist-inline-demo {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
    }
}

</style>
