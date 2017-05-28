const types = {
    TOGGLE_SIDE_PANEL: 'toggle_side_panel',
}

const state = {
    openSidePanel: false,
};

const actions = {
    toggleSidePanel ({ commit }) {
        commit(types.TOGGLE_SIDE_PANEL);
    },
};

const mutations = {
    [types.TOGGLE_SIDE_PANEL] (state) {
        state.openSidePanel = !state.openSidePanel;
    },
};


export default {
    state,
    actions,
    mutations
}
