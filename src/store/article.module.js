import { articleService } from '../services';

const state = { articles: [], indexedArticles: {} };

const actions = {
    getAll({ dispatch, commit }) {
        articleService.getArticles()
            .then(
                articles => {
                    commit('setArticles', articles);
                }
            );
    },
};

const mutations = {
    setArticles(state, articles) {
        state.articles = articles;
        state.indexedArticles = state.articles.reduce(function (map, obj) {
            map[obj.id] = obj;
            return map;
        }, {});
    },
};

export const article = {
    namespaced: true,
    state,
    actions,
    mutations
};