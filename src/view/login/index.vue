<template>
    <div class="login-Wrap">
        <i class="iconfont icon-551488821353490553221 img-logo"></i>
        <mu-text-field
            v-model="phone"
            fullWidth
            hintText="电话号码"
            type="number"
            icon=" "
            iconClass="iconfont icon-shouji"
            underlineFocusClass="active-line"
        />
        <mu-text-field
            v-model="password"
            fullWidth
            hintText="密码"
            type="password"
            icon=" "
            iconClass="iconfont icon-mima"
            underlineFocusClass="active-line"
        />
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
        .active-line {
            height: 1px;
            background-color: @themeColors;
        }
        .mu-text-field.focus-state {
            color: @themeColors;
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
        components: {},
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
