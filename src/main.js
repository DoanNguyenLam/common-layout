import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style/index.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { registerGlobalComponent } from "@/utils/import";

registerGlobalComponent(Vue);

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
