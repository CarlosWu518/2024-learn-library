//该文件用于创建vuex最核心的store
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex);
//准备actions -用于响应组件中的动作
const actions = {}

//准备mutations - 用于操作数据(state)
const mutations = {}

const getters = {}

//准备state - 用于存储数据
const state = {
    count:0,
}

//创建store
const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
export default {
    store,
}