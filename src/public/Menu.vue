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
<style lang="less">
#menu {
    .mu-avatar {
        margin-top: 50px;
    }
    .mu-item {
        height: 26px;
        p {
            font-size: 14px;
            color: #fff;
        }
        .mu-item-title {
            text-align: center;
            color: #fff;
        }
    }
    .oparator-list {
        li {
            padding: 10px 0;
            .mu-item {
                padding: 0 30px;
                .mu-item-action {
                    justify-content: center;
                    span {
                        display: inline-block;
                        width: 22px;
                        height: 22px;
                    }
                    span.editinfo {
                        background: url(../assets/images/editinfo.png) no-repeat;
                        background-size: cover;
                    }
                    span.theme {
                        background: url(../assets/images/theme.png) no-repeat;
                        background-size: cover;
                    }
                    span.Customer-service {
                        background: url(../assets/images/Customer-service.png) no-repeat;
                        background-size: cover;
                    }
                }
                .mu-item-title {
                    text-align: left;
                }
            }
        }
    }
}

</style>
