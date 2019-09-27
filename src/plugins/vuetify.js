import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify, { VCard, VRating, VToolbar } from "vuetify/lib";
import { Ripple } from "vuetify/lib/directives";

Vue.use(Vuetify, {
  icons: {
    iconfont: "md"
  },
  components: {
    VCard,
    VRating,
    VToolbar
  },
  directives: {
    Ripple
  }
});

const opts = {};

export default new Vuetify(opts);
