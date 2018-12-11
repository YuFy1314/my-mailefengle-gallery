<template>
    <div id="theme">
        <PageTop :PageTopOptions="PageTopOptions" @backout="backout()"></PageTop>
        <div class="content">
            <div class="row">
                <div class="col-xs-6" v-for="item in aTheme" @click="changeTheme(item.index)">
                    <div class="checked">
                        <i class="themeicon iconfont icon-theme" :class="item.class"></i>
                        <i class="iconfont icon-dui" v-if="item.isIconDui"></i>
                    </div>
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
                class: 'default-theme',
                title: '默认主题',
                index: 'default',
                isIconDui: false,
            }, {
                class: 'custom-theme',
                title: '自定义主题',
                index: 'custom',
                isIconDui: false,
            }, {
                class: 'black-theme',
                title: '雅黑',
                index: 'yahei',
                isIconDui: false,
            }, {
                class: 'red-theme',
                title: '海棠红',
                index: 'redbegonia',
                isIconDui: false,
            }, {
                class: 'green-theme',
                title: '藏青',
                index: 'navy',
                isIconDui: false,
            }]
        }
    },
    mounted() {
        for (let item of this.aTheme) {
            item.isIconDui = false;
            if (item.index == document.body.className) {
                item.isIconDui = true;
            }
        }
    },
    methods: {
        backout() {
            this.$router.back(1);
        },
        changeTheme(index) {
            const sThemeId = index;
            this.$exchangeTheme(sThemeId);
            for (let item of this.aTheme) {
                item.isIconDui = false;
                if (item.index == index) {
                    item.isIconDui = true;
                    this.$store.commit('UPDATE_THEME', item.index);
                }
            }
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
    justify-content: flex-start;
    margin: auto;
}

#theme .row>div {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 0;
}

#theme .row>div div {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#theme .themeicon {
    font-size: 80px;
}

#theme .default-theme {
    background-image: -webkit-gradient(linear, left top, right bottom, from(#84c361), to(#3260af));
}

#theme .custom-theme {
    background-image: -webkit-gradient(linear, left top, right bottom, from(#fff), to(#000));
}

#theme .black-theme {
    background-color: rgb(22, 24, 36);
}

#theme .red-theme {
    background-color: rgb(219, 90, 108);
}

#theme .green-theme {
    background-color: rgb(46, 78, 125);
}

#theme .icon-dui {
    position: absolute;
    right: 50px;
    bottom: 30px;
    background-color: rgb(126, 188, 103);
    font-size: 20px;
}

</style>
