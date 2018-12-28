<!-- /**
 * * modal 网页头部接口参数
 * @param {string} modal.title 网页标题
 */ -->
<template>
    <div id="modal">
        <mu-container>
            <mu-dialog width="360" :open.sync="openSimple">
                <slot name="header">
                    <h3>{{ modal.title }}</h3>
                </slot>
                <slot name="content"></slot>
                <slot name="footer">
                    <mu-button slot="actions" flat color="default" @click="commit" v-if="modal.isCommitBtn">确定</mu-button>
                    <mu-button slot="actions" flat color="default" @click="closeSimpleDialog">关闭</mu-button>
                </slot>
            </mu-dialog>
        </mu-container>
    </div>
</template>
<script>
export default {
    props: ['modalOptions'],
    data() {
        return {
            openSimple: false
        }
    },
    computed: {
        modal() {
            var modal = this.modalOptions || {};
            var modalOptions = {
                title: modal.title || '系统提示',
                isCommitBtn: typeof modal.isCommitBtn === 'undefined' ? true : modal.isCommitBtn
            };
            return modalOptions;
        }
    },
    methods: {
        openSimpleDialog() {
            this.openSimple = true;
        },
        closeSimpleDialog() {
            this.openSimple = false;
        },
        commit() {
            this.$emit('commit');
        }
    }
}

</script>
<style>


</style>
