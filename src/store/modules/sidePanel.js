const types = {
    TOGGLE_SIDE_PANEL: 'toggle_side_panel',
}

const state = {
    openSidePanel: false,
    docked: true,
};

const getters = {

};

const actions = {
    toggleSidePanel ({ commit, state }, flag) {
        commit(types.TOGGLE_SIDE_PANEL, flag);
    },
};

const mutations = {
    [types.TOGGLE_SIDE_PANEL] (state, flag) {
        state.openSidePanel = !state.openSidePanel;
        state.docked = !flag;
    },
};


export default {
    state,
    getters,
    actions,
    mutations
}
