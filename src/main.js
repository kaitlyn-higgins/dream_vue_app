import Vue from "vue";
import HighchartsVue from 'highcharts-vue';
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";


var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;
Vue.use(HighchartsVue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

