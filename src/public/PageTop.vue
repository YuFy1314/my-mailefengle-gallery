<!-- /**
 * * PageTop 网页头部接口参数
 * @param {string} PageTop.title 网页标题
 * emit 方法
 *     backout 返回上一页事件
 */ -->
<template>
    <div id="PageTop">
        <slot name="PageTop">
            <div class="return col-xs-2" @click="backout()"></div>
            <div class="title col-xs-6 col-xs-offset-2" v-if="PageTop.isShow">
                {{ PageTop.title }}
            </div>
            <div v-else>
                <div class="title col-xs-6">
                    <mu-text-field v-model="PageTop.vSearch" placeholder="请输入关键字"></mu-text-field>
                </div>
                <div class="search">
                    <i class="iconfont icon-github"></i>
                </div>
            </div>
        </slot>
    </div>
</template>
<script>
export default {
    props: ['PageTopOptions'],
    computed: {
        PageTop() {
            var PageTop = this.PageTopOptions || {};
            var PageTopOptions = {
                title: PageTop.title || '标题',
                isShow: typeof PageTop.isShow === 'undefined' ? true : PageTop.isShow,
                vSearch: PageTop.vSearch || ''
            };
            return PageTopOptions;
        }
    },
    methods: {
        backout() {
            this.$emit('backout');
        }
    }
}

</script>
<style>


</style>
