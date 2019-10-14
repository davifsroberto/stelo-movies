import Vue from 'vue';
import Vuex from 'vuex';
import loading from './Loading';
import Movies from './Movies';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loading,
    Movies,
  }
});
