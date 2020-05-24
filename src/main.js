import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false
Vue.use(VueAxios,axios);


new Vue({
  render: h => h(App),
  el:'#app',
  compoents:{App},
  template:'<App/>',
  router
}).$mount('#app')
