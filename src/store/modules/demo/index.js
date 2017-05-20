const types = {
    DEMO_TOGGLE_SIDE_MENU: 'toggle_side_menu',
}

const state = {
    showSideMenu: true,
    docked: true,
};

const getters = {

};

const actions = {
    toggleSideMenu ({ commit, state }, flag) {
        commit(types.DEMO_TOGGLE_SIDE_MENU, flag);
    },
};

const mutations = {
    [types.DEMO_TOGGLE_SIDE_MENU] (state, flag) {
        state.showSideMenu = !state.showSideMenu;
        state.docked = !flag;
    },
};


export default {
    state,
    getters,
    actions,
    mutations
}
