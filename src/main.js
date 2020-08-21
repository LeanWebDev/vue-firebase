import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Utils
import "@babel/polyfill";
import "mutationobserver-shim";
import axios from "axios";

// Plugins
import { auth } from "./plugins/firebase";
import "./plugins/bootstrap-vue";

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }

  if (user) {
    store.dispatch("fetchUserProfile", user);
  }
});
