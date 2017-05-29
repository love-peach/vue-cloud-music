const types = {
    CHANGE_ACTIVE_TAB: 'change_active_tab',
}

const state = {
    activeTab: '/found-music/recommendation'
};

const getters = {

};

const actions = {
    changeActiveTab ({ commit, state }, tab) {
        commit(types.CHANGE_ACTIVE_TAB, tab);
    },
};

const mutations = {
    [types.CHANGE_ACTIVE_TAB] (state, tab) {
        state.activeTab = tab;
    },
};


export default {
    state,
    getters,
    actions,
    mutations
}
