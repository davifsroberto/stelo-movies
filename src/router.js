import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'populares',
      component: Home,
      params: { url: '5d4a06b03200005e00600f5c' }
    },
    {
      path: '/:urlMovie',
      name: 'avaliados',
      component: Home,
      props: true     
    },
    {
      path: '/:urlMovie',
      name: 'estreias',
      component: Home,
      props: true     
    },
    {
      path: '/:urlMovie',
      name: 'cartaz',
      component: Home,
      props: true     
    }
  ]
});
