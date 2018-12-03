<template>
    <div id="footer">
        <ul>
            <li>
                <router-link to="/home" :class="{ 'home': home, 'homehover': homehover }">
                    <span ref="homeImg"></span>
                    <p ref="homeText">{{ sHomeTitle }}</p>
                </router-link>
            </li>
            <li>
                <router-link to="/discovery" ref="discoveryImg" :class="{ 'discovery': discovery, 'discoveryhover': discoveryhover }">
                    <span ref="discoveryText"></span>
                    <p>{{ sDiscoveryTitle }}</p>
                </router-link>
            </li>
            <li>
                <router-link to="/collect" ref="collectImg" :class="{ 'collect': collect, 'collecthover': collecthover }">
                    <span ref="collectText"></span>
                    <p>{{ sCollectTitle }}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sHomeTitle: '主页',
            sDiscoveryTitle: '发现',
            sCollectTitle: '收藏',
            home: true,
            homehover: false,
            discovery: true,
            discoveryhover: false,
            collect: true,
            collecthover: false,
        }
    },
    watch: {
        '$route.path': function(newVal, oldVal) {
            if (newVal == '/home') {
                this.updateHomeTitle();
                this.home = false;
                this.homehover = true;
                this.discovery = true;
                this.discoveryhover = false;
                this.collect = true;
                this.collecthover = false;
            } else if (newVal == '/discovery') {
                this.updateDiscoveryTitle();
                this.home = true;
                this.homehover = false;
                this.discovery = false;
                this.discoveryhover = true;
                this.collect = true;
                this.collecthover = false;
            } else if (newVal == '/collect') {
                this.updateCollectTitle();
                this.home = true;
                this.homehover = false;
                this.discovery = true;
                this.discoveryhover = false;
                this.collect = false;
                this.collecthover = true;
            }
        }
    },
    methods: {
        initData() {
            if (this.$router.history.current.path === '/home') {
                this.updateHomeTitle();
                this.home = false;
                this.homehover = true;
            } else if (this.$router.history.current.path === '/discovery') {
                this.updateDiscoveryTitle();
                this.discovery = false;
                this.discoveryhover = true;
            } else if (this.$router.history.current.path === '/collect') {
                this.updateCollectTitle();
                this.collect = false;
                this.collecthover = true;
            }
        },
        updateHomeTitle() {
            this.$store.commit('UPDATE_TITLE', this.sHomeTitle);
        },
        updateDiscoveryTitle() {
            this.$store.commit('UPDATE_TITLE', this.sDiscoveryTitle);
        },
        updateCollectTitle() {
            this.$store.commit('UPDATE_TITLE', this.sCollectTitle);
        }
    },
    created() {
        this.$nextTick(() => {
            this.initData();
        });
    },
}

</script>
<style lang="less">
#footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: -webkit-linear-gradient(left, #84c361, #3260af);
    background: -moz-linear-gradient(left, #84c361, #3260af);
    background: -o-linear-gradient(left, #84c361, #3260af);
    background: linear-gradient(left, #84c361, #3260af);
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: -webkit-linear-gradient(left, #84c361, #3260af);
        background: -moz-linear-gradient(left, #84c361, #3260af);
        background: -o-linear-gradient(left, #84c361, #3260af);
        background: linear-gradient(left, #84c361, #3260af);
        li {
            flex: 1;
            a {
                display: flex;
                align-items: center;
                flex-direction: column;
                text-decoration: none;
                img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                }
                p {
                    font-size: 10px;
                }
                span {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

#footer ul li {
    a {
        p {
            color: #fff;
        }
    }
    .home span {
        background: url(../assets/images/home.png) no-repeat;
        background-size: cover;
    }

    .discovery span {
        background: url(../assets/images/discovery.png) no-repeat;
        background-size: cover;
    }

    .collect span {
        background: url(../assets/images/collect.png) no-repeat;
        background-size: cover;
    }
    .homehover {
        span {
            background: url(../assets/images/home-hover.png) no-repeat;
            background-size: cover;
        }
        p {
            color: #ff4081;
        }
    }

    .discoveryhover {
        span {
            background: url(../assets/images/discovery-hover.png) no-repeat;
            background-size: cover;
        }
        p {
            color: #ff4081;
        }
    }
    .collecthover {
        span {
            background: url(../assets/images/collect-hover.png) no-repeat;
            background-size: cover;
        }
        p {
            color: #ff4081;
        }
    }
}

</style>
