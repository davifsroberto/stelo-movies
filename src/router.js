import Vue from "vue";
import Router from "vue-router";
import EmCartaz from "./movies/EmCartaz.vue";
import Populares from "./movies/Populares.vue";
import Avaliados from "./movies/Avaliados.vue";
import Estreias from "./movies/Estreias.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "populares",
      component: Populares
    },
    {
      path: "/cartaz",
      name: "cartaz",
      component: EmCartaz
    },
    {
      path: "/avaliados",
      name: "avaliados",
      component: Avaliados
    },
    {
      path: "/estreias",
      name: "estreias",
      component: Estreias
    }
  ]
});
