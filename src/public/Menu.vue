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
            <mu-list-item @click.native="editInfo()">
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
        <Modal ref="editinfo" :modalOptions="editinfoOptions" @commit="commit()">
            <div slot="content">
                <mu-list class="oparator-list">
                    <mu-text-field v-model="vNickname" placeholder="昵称"></mu-text-field>
                    <br/>
                    <mu-text-field v-model="vSignature" placeholder="个人签名"></mu-text-field>
                    <br/>
                    <AddressSelector v-if="isAddressShow" :addressOptions="addressOptions"></AddressSelector>
                </mu-list>
            </div>
        </Modal>
        <Modal ref="dialog" :modalOptions="modalOptions">
            <div slot="content">
                <mu-list class="oparator-list">
                    <mu-list-item @click.native="getGithub()">
                        <a href="https://github.com/YuFy1314" style="display: flex; align-items: center;">
                            <mu-list-item-action>
                                <i class="iconfont icon-github"></i>
                            </mu-list-item-action>
                            <mu-list-item-title>GitHub</mu-list-item-title>
                        </a>
                    </mu-list-item>
                    <mu-list-item @click.native="getEmail()">
                        <mu-list-item-action>
                            <i class="iconfont icon-youxiang"></i>
                        </mu-list-item-action>
                        <mu-list-item-title>电子邮箱</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item @click.native="getPhoneTell()">
                        <mu-list-item-action>
                            <i class="iconfont icon-dianhua"></i>
                        </mu-list-item-action>
                        <mu-list-item-title>电话</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </div>
        </Modal>
    </mu-row>
</template>
<script>
import Modal from './Modal.vue';
import AddressSelector from './AddressSelector.vue';
export default {
    data() {
        return {
            size: 100,
            nickname: '苏日俪格',
            signature: '我是一名web前端开发人员',
            editinfoOptions: {
                title: '编辑资料'
            },
            modalOptions: {
                title: '联系方式',
                isCommitBtn: false
            },
            vNickname: '',
            vSignature: '',
            addressOptions: {},
            isAddressShow: false,
        }
    },
    mounted() {
        this.nickname = window.localStorage.getItem('vNickname') || this.nickname;
        this.signature = window.localStorage.getItem('vSignature') || this.signature;
        this.vNickname = this.nickname || this.vNickname;
        this.vSignature = this.signature || this.vSignature;
        this.isAddressShow = true;
    },
    methods: {
        getTheme() {
            this.$router.push({
                name: 'Theme'
            });
        },
        editInfo() {
            this.openEditInfoModal();
        },
        commit() {
            window.localStorage.setItem('vNickname', this.vNickname);
            window.localStorage.setItem('vSignature', this.vSignature);
            this.nickname = window.localStorage.getItem('vNickname') || this.nickname;
            this.signature = window.localStorage.getItem('vSignature') || this.signature;
            this.$toast.center('修改成功');
            this.$refs.editinfo.closeSimpleDialog();
        },
        getContact() {
            this.openSimpleDialog();
        },
        openEditInfoModal() {
            this.$refs.editinfo.openSimpleDialog();
        },
        openSimpleDialog() {
            this.$refs.dialog.openSimpleDialog();
        },
        getGithub() {
            console.log('github')
        },
        getEmail() {
            console.log('getEmail')
        },
        getPhoneTell() {
            window.location.href = 'tel://17647373157'
        }
    },
    components: {
        Modal,
        AddressSelector
    }
}

</script>
<style>
input::-webkit-input-placeholder {
    color: #ece1e1;
}

</style>
