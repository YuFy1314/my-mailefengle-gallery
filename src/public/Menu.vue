<template>
    <mu-row justify-content="center" id="menu">
        <mu-avatar :size="size">
            <img src="../assets/images/logo.png" />
        </mu-avatar>
        <mu-list>
            <mu-list-item>
                <mu-list-item-title>
                    <div class="nickname">
                        <p>{{ nickname }}</p>
                    </div>
                </mu-list-item-title>
            </mu-list-item>
            <mu-list-item>
                <mu-list-item-title>
                    <div class="signature">
                        <p>{{ signature }}</p>
                    </div>
                </mu-list-item-title>
            </mu-list-item>
        </mu-list>
        <mu-list class="oparator-list">
            <mu-list-item>
                <mu-list-item-action>
                    <span class="editinfo"></span>
                </mu-list-item-action>
                <mu-list-item-title>编辑资料</mu-list-item-title>
            </mu-list-item>
            <mu-list-item>
                <mu-list-item-action>
                    <span class="theme"></span>
                </mu-list-item-action>
                <mu-list-item-title>个性主题</mu-list-item-title>
            </mu-list-item>
            <mu-list-item>
                <mu-list-item-action>
                    <span class="Customer-service"></span>
                </mu-list-item-action>
                <mu-list-item-title>联系客服</mu-list-item-title>
            </mu-list-item>
        </mu-list>
    </mu-row>
</template>
<script>
export default {
    data() {
        return {
            size: 100,
            nickname: '苏日俪格',
            signature: '我是一名web前端开发人员'
        }
    },
    methods: {},
}

</script>
<style>


</style>
