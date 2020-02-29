import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入默认样式
import '@/style/reset.css';

import { PasswordInput, NumberKeyboard,NavBar,Icon,Search,List,PullRefresh,Uploader,Form,Button,Field,ImagePreview,Sticky,Toast  } from 'vant';
Vue.use(NumberKeyboard);
Vue.use(NavBar);
Vue.use(PasswordInput);
Vue.use(Icon);
Vue.use(Search);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Uploader);
Vue.use(Form);
Vue.use(Button);
Vue.use(Field);
Vue.use(ImagePreview);
Vue.use(Sticky);
Vue.use(Toast);
 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
