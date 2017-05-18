
const types = {
    ADD_TODO: 'add_todo',
    SWITCH_STATUS: 'switch_status',
    CHANGE_STATUS: 'change_status',
    DELETE_TODO: 'deleteTodo',
    CLEAR_COMPLETED: 'clear_completed'
}

const state = {
    todoList: [],
    visibility: 'all'
}

// getters
const getters = {
    visibilityType: state => state.visibility,
    todoListAll: state => state.todoList,
    todoListCompleted: state => state.todoList.filter(item => item && item.complete === true),
    todoListCompleting: state => state.todoList.filter(item => item && item.complete === false),
}

// actions
const actions = {
    addTodo ({ commit, state }, title) {
        if (title) {
            commit(types.ADD_TODO, {title});
        }
    },
    switchStatus ({ commit, state }, status) {
        if(state.visibility !== status) {
            commit(types.SWITCH_STATUS, {status});
        }
    },
    changeStatus ({ commit, state }, id) {
        commit(types.CHANGE_STATUS, id);
    },
    deleteTodo ({commit, state}, todo) {
        commit(types.DELETE_TODO, todo);
    },
    clearCompleted ({commit, state}) {
        commit(types.CLEAR_COMPLETED);
    }
}

// mutations
const mutations = {
    [types.ADD_TODO] (state, { title }) {
        state.todoList.push({
            title: title,
            complete: false,
            id: new Date().getTime()
        });
    },
    [types.SWITCH_STATUS] (state, { status }) {
        state.visibility = status;
    },
    [types.CHANGE_STATUS] (state, id ) {
        state.todoList.forEach(item => {
            if(item.id === id) {
                item.complete = !item.complete;
            }
        })
    },
    [types.DELETE_TODO] (state, todo) {
        const deleteIndex = state.todoList.indexOf(todo);
        state.todoList.splice(deleteIndex, 1);
    },
    [types.CLEAR_COMPLETED] (state) {
        state.todoList = state.todoList.filter(todo => todo && todo.complete === false);
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
