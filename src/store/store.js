import Vue from 'vue'
import Vuex from 'vuex'
import todoList from './modules/todolist'

import sidePanel from './modules/sidePanel'

import demoStore from './modules/demo'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        todoList,
        demoStore,
        sidePanel
    },
})
