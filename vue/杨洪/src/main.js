import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Head from "@/components/head.vue"
Vue.component("Head",Head)
import Vantui from "vant"
Vue.use(Vantui)
import "@/styles/index.scss"

import { NavBar } from 'vant';

Vue.use(NavBar);

import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);


import VueResource from "vue-resource";
Vue.use(VueResource);

import ajax from "@/utils/ajax"
Vue.prototype.$axios=ajax;


import { Toast } from 'vant';

Vue.use(Toast);
 
import { Lazyload } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload);//图片懒加载

import { PullRefresh } from 'vant';   //下拉刷新

Vue.use(PullRefresh);

import { Dialog } from 'vant';   //弹出
Vue.use(Dialog);



import Foot from "@/components/foot.vue"
Vue.component("Foot",Foot)

import list from "@/components/list.vue"
Vue.component("list",list)

import Swipe from '@/components/swipe.vue';

Vue.component("Swipe",Swipe);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
