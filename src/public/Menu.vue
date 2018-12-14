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
            <mu-list-item @click.native="getTheme()">
                <mu-list-item-action>
                    <span class="theme"></span>
                </mu-list-item-action>
                <mu-list-item-title>个性主题</mu-list-item-title>
            </mu-list-item>
            <mu-list-item @click.native="getContact()">
                <mu-list-item-action>
                    <span class="Customer-service"></span>
                </mu-list-item-action>
                <mu-list-item-title @click="openSimpleDialog()">联系客服</mu-list-item-title>
            </mu-list-item>
        </mu-list>
        <Modal ref="dialog" :modalOptions="modalOptions">
            <div slot="content">
                <mu-list class="oparator-list">
                    <mu-list-item @click.native="getGithub()">
                        <mu-list-item-action>
                            <i class="iconfont icon-github"></i>
                        </mu-list-item-action>
                        <mu-list-item-title>GitHub</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item @click.native="getEmail()">
                        <mu-list-item-action>
                            <i class="iconfont icon-youxiang"></i>
                        </mu-list-item-action>
                        <mu-list-item-title>电子邮箱</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </div>
        </Modal>
    </mu-row>
</template>
<script>
import Modal from './Modal.vue';
export default {
    data() {
        return {
            size: 100,
            nickname: '苏日俪格',
            signature: '我是一名web前端开发人员',
            modalOptions: {
                title: '联系方式'
            }
        }
    },
    methods: {
        getTheme() {
            this.$router.push({
                name: 'Theme'
            });
        },
        getContact() {
            this.openSimpleDialog();
        },
        openSimpleDialog() {
            this.$refs.dialog.openSimpleDialog();
        },
        getGithub() {
            console.log('github')
        },
        getEmail() {
            console.log('getEmail')
        }
    },
    components: {
        Modal
    }
}

</script>
<style>


</style>
