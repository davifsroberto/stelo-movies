const state = {
  listMovies : []
};

const getters = {
  result: state => state.listMovies
};

const mutations = {
  SETMOVIES(state, payload) {
    state.listMovies = payload;
  }
};

const actions = {
  setMovies:  ({ commit }, listMovies) => {
    commit('SETMOVIES', listMovies);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};