import { defineStore } from 'pinia';

export const GlobalStore = defineStore('GlobalStore', {
    state: () => ({
        isLogin: false, // 登录状态
    }),
    getters: {},
    actions: {
        setLoginStatus(login: boolean) {
            this.isLogin = login;
        },
    }
})
