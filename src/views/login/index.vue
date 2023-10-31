<template>
    <div class="login-backgroud">
        <div class="login-wrapper">
            <div :class="screenWidth > 1110 ? 'left inline-block' : ''">
                <div class="login-title">
                    <span>使用 Vue3 + Element Plus创建的商城后台</span>
                </div>
            </div>
            <div :class="screenWidth > 1110 ? 'right inline-block' : ''">
                <div class="login-container">
                    <LoginForm></LoginForm>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="login">
import { ref, onMounted } from 'vue';
import LoginForm from '~/components/login/LoginForm.vue';

const screenWidth = ref(null);

onMounted(() => {
    screenWidth.value = document.body.clientWidth;
    window.onresize = () => {
        return (() => {
            screenWidth.value = document.body.clientWidth;
        })();
    };
});
</script>

<style scoped lang="scss">
.login-backgroud {
    height: 100vh;
    background-image: url("~/assets/images/login_backgroud.png");
    background-size: scale-down;

    .login-wrapper {
        padding-top: 8%;
        width: 80%;
        margin: 0 auto;

        .left {
            vertical-align: middle;
            text-align: right;
            width: 60%;
            img {
                object-fit: contain;
                width: 100%;
                @media only screen and (min-width: 1440px) {
                    width: 85%;
                }
            }
        }
        .right {
            vertical-align: middle;
            width: 40%;
        }
    }

    .login-title {
        text-align: right;
        margin-right: 10%;
        span:first-child {
            color: #2378d2;
            font-size: 40px;
            font-family: pingFangSC-Regular;
            font-weight: 600;
            @media only screen and (max-width: 768px) {
                font-size: 35px;
            }
        }
        @media only screen and (max-width: 1110px) {
            margin-bottom: 20px;
            font-size: 35px;
            text-align: center;
            margin-right: 0;
        }
    }
    .login-container {
        margin-top: 40px;
        padding: 40px 0;
        width: 390px;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.55);
        border-radius: 4px;
        box-shadow: 2px 4px 22px rgba(0, 94, 235, 0.2);
        @media only screen and (max-width: 1440px) {
            margin-top: 60px;
        }
        @media only screen and (max-width: 1110px) {
            margin: 60px auto 0;
        }

        @media only screen and (max-width: 768px) {
            width: 100%;
        }
    }
}
</style>