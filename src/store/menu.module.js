import { articleService } from '../services';

const state = { toggle: false, hideable: false };

const actions = {
    toggle({ dispatch, commit }) {
        commit('toggle');
    },
    hide({ dispatch, commit }) {
        commit('hide');
    },
    makeHideable({ dispatch, commit }) {
        console.log("makeHideable")
        commit('makeHideable');
    },
};

const mutations = {
    toggle(state) {
        state.toggle = !state.toggle;
    },
    hide(state) {
        state.toggle = false;
        state.hideable = false;

    },
    makeHideable(state) {
        state.hideable = true;
    },
};

export const menu = {
    namespaced: true,
    state,
    actions,
    mutations
};