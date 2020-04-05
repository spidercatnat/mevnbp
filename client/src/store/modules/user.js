import UserService from "../../services/UserService";

const state = {
    loggedIn: false,
    user: ''
};

const getters = {
    authStatus: (state) => state.loggedIn,
    getUser: (state) => state.user
};

const actions = {
    async auth({ commit }, token) {
        const _token = UserService.guard(token);
        commit('setAuth', await _token);
        return _token;
    },
    async login({ commit }, creds) {
        const res = await UserService.login(creds);
        const { _id, name, email } = res.user;
        commit('setUser', { user: { _id, name, email } })
        localStorage.setItem("bztoken", res.token);
        return res.message;
    },
};

const mutations = {
    setAuth: (state, loggedIn) => {
        state.loggedIn = loggedIn
    },
    setUser: (state, user) => {
        state.user = user;
        state.loggedIn = true;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};