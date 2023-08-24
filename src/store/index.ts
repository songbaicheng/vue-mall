import { defineStore } from 'pinia';

export const GlobalStore = defineStore('GlobalStore', {
    state: () => ({
        name: 'songbaicheng',
        age: 23,
        isLogin: false
    }),
    getters: {},
    actions: {
        setLoginStatus(login: boolean) {
            this.isLogin = login;
        },
    }
})
