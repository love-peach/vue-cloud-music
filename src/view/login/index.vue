<template>
    <div class="login-Wrap">
        <i class="iconfont icon-551488821353490553221 img-logo"></i>
        <div class="field">
            <div class="field-item">
                <i class="iconfont icon-shouji"></i>
                <div class="field-target">
                    <input v-model="phone" type="number" placeholder="请输入手机号">
                </div>
            </div>
            <div class="field-item">
                <i class="iconfont icon-mima"></i>
                <div class="field-target">
                    <input v-model="password" type="password" placeholder="请输入密码">
                </div>
            </div>
        </div>
        <a class="btn btn-main" @click="handleLogin">登录</a>
    </div>
</template>
<style lang="less">
    @import "../../style/variable";
    .login-Wrap {
        .img-logo {
            display: block;
            padding: .2rem 0;
            text-align: center;
            font-size: 2rem;
            color: @themeColors;
        }

        .field {
            margin: .2rem 0 .4rem;
            .field-item {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                .iconfont {
                    width: 1.12rem;
                    font-size: .42rem;
                    text-align: center;
                }
                .field-target {
                    flex: 1;
                    border-bottom: 1px solid #ccc;
                    input {
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        outline: none;
                        border: none;
                        background: none;
                        border-radius: 0 0 0 0;
                        box-shadow: none;
                        display: block;
                        padding: 0;
                        margin: 0;
                        width: 100%;
                        height: 32px;
                        font-style: inherit;
                        font-variant: inherit;
                        font-weight: inherit;
                        font-stretch: inherit;
                        font-size: inherit;
                        color: rgba(0,0,0,.87);
                        font-family: inherit;
                        position: relative;
                    }
                }

            }
        }
    }
    .btn {
        display: block;
        padding: .2rem .5rem;
        margin: .2rem;
        color: #f5f5f5;
        font-size: .3rem;
        text-decoration: none;
        text-align: center;
        border-radius: 1rem;
        opacity: 1;
        transition: all .3s ease;
    }
    .btn:active {
        opacity: .9;
    }
    .btn-main {
        background-color: @themeColors;
    }
</style>
<script type="text/javascript">
    import API from '../../api/API';
    import request from '../../api/request';
    export default{
        data(){
            return {
                phone: '',
                password: ''
            }
        },
        methods: {
            handleLogin() {
                const vm = this;
                const isChecked = this.checkedFormData();
                if (!isChecked) {
                    return;
                }
                request.login({
                    phone: vm.phone,
                    password: vm.password
                }, vm)
            },
            checkedFormData() {
                if (!this.phone) {
                    this.$toast({message: '请输入手机号', position: 'top'});
                    return false;
                }
                if (!(/^1[34578]\d{9}$/.test(this.phone))) {
                    this.$toast({message: '请输入正确手机号', position: 'top'});
                    return false;
                }
                if (!this.password) {
                    this.$toast({message: '请输入密码', position: 'top'});
                    return false;
                }
                if (this.password.length < 6) {
                    this.$toast({message: '密码至少为 6 位', position: 'top'});
                    return false;
                }
                return true;
            },
        },
    }
</script>
