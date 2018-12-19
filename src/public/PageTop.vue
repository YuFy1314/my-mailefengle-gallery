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
            <div class="title col-xs-6 col-xs-offset-2">
                {{ PageTop.title }}
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
