import { createStore } from "vuex";

const store = createStore({
  state: {
    USER: false,
    TOKEN: false,
  },
  mutations: {
    USER(state, user) {
      state.user = user;
    },

    TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
    user(context, value) {
      context.commit("USER", value);
    },
    token(context, value) {
      context.commit("TOKEN", value);
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    token(state) {
      return state.token;
    },
  },
});

export default store;
