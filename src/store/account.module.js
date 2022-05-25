import router from '@/router';
import { userService } from '../services';

const user = JSON.parse(localStorage.getItem('user'));
const errors = JSON.parse(localStorage.getItem('loggingErrors'));
const state = user
    ? { errors: errors || [], status: { loggedIn: true }, user }
    : { errors: errors || [], status: {}, user: null };

const actions = {
    login({ dispatch, commit }, { email, password }) {
        commit('loginRequest');
        return userService.login(email, password)
            .then(
                user => {
                    commit('loginSuccess', user);
                    router.push('/me');
                },
                error => {
                    commit('loginFailure', error);
                }
            );
    },
    logout({ commit }) {
        userService.logout();
        commit('logout');
    },
    clearErrors({ commit }) {
        commit('clearErrors');
    }
};

const mutations = {
    loginRequest(state, user) {
        state.errors = []
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        localStorage.setItem('loggingErrors', JSON.stringify(["Identifiants incorrect."]));
        state.errors.push("Identifiants incorrect.")
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    clearErrors(state) {
        state.errors = []
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};