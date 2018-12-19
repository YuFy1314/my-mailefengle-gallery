<template>
    <div id="movieDetail">
        <PageTop :PageTopOptions="PageTopOptions" @backout="backout"></PageTop>
        <div class="movie-content">
            <div class="movie-info">
                <div class="movie-pic">
                    <mu-paper class="demo-paper" :z-depth="5">
                        <img :src="oMovieInfo.images.large" alt="">
                    </mu-paper>
                </div>
                <div class="movie-detail">
                    <div class="movie-detail-title">
                        <h2>{{ oMovieInfo.title }} ({{ oMovieInfo.year }})</h2>
                        <span>{{ oMovieInfo.original_title }} ({{ oMovieInfo.year }})</span>
                    </div>
                    <div class="movie-detail-info">
                        <p>{{ oMovieInfo.genres[0] }} {{ oMovieInfo.genres[1] }} {{ oMovieInfo.genres[2] }}</p>
                    </div>
                    <mu-button>
                        想看
                        <mu-icon right value="grade"></mu-icon>
                    </mu-button>
                </div>
            </div>
            <div class="movie-state">
                <div class="movie-title">
                    <h3>豆瓣评分</h3>
                </div>
                <div class="movie-description">
                    <div class="movie-description-content">
                        <div class="score">
                            <strong>{{ oMovieInfo.rating.average }}</strong>
                        </div>
                        <div class="star">
                            <i :style="{backgroundColor: item.starBgColor}" class="iconfont icon-Collection" v-for="item in aStar"></i>
                        </div>
                        <div class="access">
                            {{ oMovieInfo.collect_count }}人评分
                        </div>
                    </div>
                </div>
            </div>
            <div class="movie-actors">
                <div class="movie-title">
                    <h3>影人</h3>
                </div>
                <div class="movie-description">
                    <div class="director-info character" v-for="item in oMovieInfo.directors">
                        <div class="director-pic">
                            <img :src="item.avatars.large" alt="">
                        </div>
                        <div class="director-name">
                            <p>{{ item.name }}</p>
                            <span>导演</span>
                        </div>
                    </div>
                    <div class="actor-info character" v-for="item in oMovieInfo.casts">
                        <div class="director-pic">
                            <img :src="item.avatars.large" alt="">
                        </div>
                        <div class="director-name">
                            <p>{{ item.name }}</p>
                            <span>演员</span>
                        </div>
                    </div>
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
                title: ''
            },
            oMovieInfo: {},
            aImgcache: [],
            aStar: [{
                starBgColor: '#BFC7CE'
            }, {
                starBgColor: '#BFC7CE'
            }, {
                starBgColor: '#BFC7CE'
            }, {
                starBgColor: '#BFC7CE'
            }, {
                starBgColor: '#BFC7CE'
            }],
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        backout() {
            this.$router.back(1);
        },
        initData() {
            if (this.$route.params.directors) {
                this.oMovieInfo = this.$route.params;
            } else {
                this.oMovieInfo = this.$route.params.subject;
            }
            this.PageTopOptions.title = this.oMovieInfo.title;
            for (var i = 0; i < this.oMovieInfo.directors.length; i++) {
                let url = this.oMovieInfo.directors[i].avatars.large;
                let _url = url.substring(8);
                let imgcache = 'https://images.weserv.nl/?url=' + _url; // 处理图片加载失败出现缓存403问题
                this.oMovieInfo.directors[i].avatars.large = imgcache;
            }
            for (var i = 0; i < this.oMovieInfo.casts.length; i++) {
                let url = this.oMovieInfo.casts[i].avatars.large;
                let _url = url.substring(8);
                let imgcache = 'https://images.weserv.nl/?url=' + _url; // 处理图片加载失败出现缓存403问题
                this.oMovieInfo.casts[i].avatars.large = imgcache;
            }
            let score = this.oMovieInfo.rating.average;
            if (score < 2.5) {
                this.aStar[0].starBgColor = '#f90';
            } else if (score >= 2.5 && score < 5) {
                for (var i = 0; i < this.aStar.length - 3; i++) {
                    this.aStar[i].starBgColor = '#f90';
                }
            } else if (score >= 5 && score < 7.5) {
                for (var i = 0; i < this.aStar.length - 2; i++) {
                    this.aStar[i].starBgColor = '#f90';
                }
            } else {
                for (var i = 0; i < this.aStar.length - 1; i++) {
                    this.aStar[i].starBgColor = '#f90';
                }
            }
        }
    }
}

</script>
<style lang="less">
#movieDetail .movie-content {
    padding: 10px;
    padding-top: 65px;
    .movie-info {
        width: 100%;
        height: 200px;
        box-sizing: border-box;
        display: flex;
        .movie-pic {
            flex: 1;
            .demo-paper {
                border-radius: 10px;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
            }
        }
        .movie-detail {
            flex: 2;
            padding-left: 10px;
            .movie-detail-title {
                h2 {
                    font-size: 20px;
                    font-weight: bold;
                }
                span {
                    display: block;
                    font-size: 16px;
                    color: #666;
                    margin-top: 5px;
                }
            }
            .movie-detail-info {
                margin-top: 10px;
                p {
                    color: #666;
                }
            }
            button {
                float: right;
                margin-top: 50px;
                margin-right: 20px;
            }
        }
    }
    .movie-state {
        margin-top: 10px;
        width: 100%;
        height: 150px;
        background-color: #e8f0f9;
        border-radius: 10px;
        padding: 10px 20px;
        h3 {
            font-size: 14px;
        }
        .movie-description {
            display: flex;
            justify-content: center;
            height: 115px;
            .movie-description-content {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                .score {
                    line-height: 18px;
                    strong {
                        font-size: 26px;
                    }
                }
                .star {
                    i {
                        font-size: 12px;
                    }
                }
                .access {
                    font-size: 12px;
                    color: #666;
                }
            }
        }
    }
    .movie-actors {
        margin-top: 10px;
        width: 100%;
        height: 200px;
        .movie-title {
            h3 {
                font-size: 16px;
                font-weight: bold;
            }
        }
        .movie-description {
            margin-top: 10px;
            display: flex;
            overflow-x: scroll;
            white-space: nowrap;
            .character {
                margin-right: 10px;
                .director-pic {
                    width: 70px;
                    width: 100px;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                    }
                }
                .director-name {
                    p {
                        font-size: 14px;
                        font-weight: bold;
                        margin-top: 5px;
                    }
                    span {
                        font-size: 12px;
                        color: #666;
                    }
                }
            }
        }
    }
}

</style>
