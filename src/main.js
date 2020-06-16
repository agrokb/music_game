import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



Vue.use(BootstrapVue);

Vue.config.productionTip = false
Vue.use(VueAxios,axios);


new Vue({
  render: h => h(App),
  el:'#app',
  compoents:{App},
  template:'<App/>',
  router
}).$mount('#app')
