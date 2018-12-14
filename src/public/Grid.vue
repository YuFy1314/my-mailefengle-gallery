<template>
    <div class="classification">
        <div class="classification-title">
            <slot name="header">
                <h3>{{ grid.title }}</h3>
                <span v-if="grid.isMoreBtn" @click="viewMore()">查看更多<i class="iconfont icon-right"></i></span>
            </slot>
        </div>
        <slot name="content">
            <mu-grid-list class="gridlist-inline-demo" :cols="grid.col">
                <mu-grid-tile v-for="(item, index) in grid.aGridList" :key="index">
                    <img :src="item.src">
                    <span slot="title">{{ item.title }}</span>
                    <span slot="subTitle"><b>{{ item.name }}</b></span>
                    <mu-button slot="action" icon v-if="grid.starBtn" @click="star()">
                        <mu-icon value="star_border"></mu-icon>
                    </mu-button>
                </mu-grid-tile>
            </mu-grid-list>
        </slot>
    </div>
</template>
<script>
export default {
    props: ['gridOptions'],
    computed: {
        grid() {
            var grid = this.gridOptions || {};
            var aGridList = grid.aGridList || [];
            if (aGridList.length > 0) {
                aGridList.forEach(function(item) {
                    item.src ? item.src : require('@/assets/images/phone-bg.jpg');
                    item.title ? item.title : '';
                    item.name ? item.name : '';
                });
            }

            var gridOptions = {
                title: grid.title || 'Grid列表标题',
                isMoreBtn: typeof grid.isMoreBtn === 'undefined' ? true : grid.isMoreBtn,
                col: grid.col || 4,
                aGridList: aGridList,
                starBtn: typeof grid.starBtn === 'undefined' ? true : grid.starBtn
            };
            return gridOptions;
        }
    },
    methods: {
        viewMore() {
            this.$emit('viewMore');
        },
        star() {
            this.$emit('star');
        }
    }
}

</script>
<style lang="less">
.classification {
    .classification-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        vertical-align: middle;
        h3 {
            height: 40px;
            line-height: 40px;
            font-size: 18px;
            font-weight: 600;
        }
        span {
            color: #000;
            i {
                background-color: #000;
                font-size: 18px;
                line-height: 19px;
            }
        }
    }
    .mu-grid-list {
        margin: 0 !important;
    }
    .mu-grid-tile-title-container {
        margin-left: 12px;
        flex: 2;
        .mu-grid-tile-title {
            font-size: 12px;
        }
    }
    .mu-grid-tile-action {
        flex: 1;
        .mu-icon-button {
            width: auto;
            height: auto;
            padding: 0;
        }
    }
}

</style>
