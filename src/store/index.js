import {createStore} from 'vuex'

export default createStore({
    state: {
        userName: "",
        passWord: ""
    },
    getters: {
        isLogin: (state) => {
            return state.userName.length > 0
        }
    },
    mutations: {
        clearUserInfo(state) {
            state.userName = "";
            state.userPassword = "";
        },
        registerUserInfo(state, {name, password}) {
            state.userName = name;
            state.password = password;
        }
    },
    actions: {},
    modules: {}
})
