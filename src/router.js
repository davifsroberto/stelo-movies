import Vue from "vue";
import Router from "vue-router";
import EmCartaz from "./movies/components/EmCartaz.vue";
import Populares from "./movies/components/Populares.vue";
import Avaliados from "./movies/components/Avaliados.vue";
import Estreias from "./movies/components/Estreias.vue";

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
