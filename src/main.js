import Vue from "vue";
import App from "./App.vue";
import G6 from "@antv/g6";

Vue.use(G6);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
