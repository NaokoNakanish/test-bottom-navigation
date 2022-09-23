import Vue from "nativescript-vue";
import App from "./components/App";
import VueDevtools from "nativescript-vue-devtools";
import BottomNavigation from "@nativescript-community/ui-material-bottom-navigation/vue";

// if(TNS_ENV !== 'production') {
//   Vue.use(VueDevtools)
// }

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production";

Vue.use(VueDevtools);
Vue.use(BottomNavigation);

new Vue({
  render: (h) => h("frame", [h(App)]),
}).$start();
