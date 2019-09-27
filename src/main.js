import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vueMoment from "vue-moment";
import moment from "moment";
import locale from "moment/locale/pt-br";

Vue.use(vueMoment, { moment, locale });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
