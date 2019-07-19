import Vue from 'vue'

// 导入axios
import axios from "axios";
Vue.prototype.axios = axios;
// 指定跟目录
axios.defaults.baseURL = "http://www.liulongbin.top:3005"


// // 导入mint-ui
// import {
//   Header,
//   Swipe,
//   SwipeItem,
//   Button,
//   Lazyload
// } from 'mint-ui';
// Vue.component(Header.name, Header, Button);
// // 引入轮播图
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);


// 实现图片懒加载必须全部导入  不能按需导入
import mui from 'mint-ui'
Vue.use(mui)
// 导入缩略图的 包
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


// 引入css
import 'mint-ui/lib/style.css'
import "./dist/css/mui.css"
import "./dist/css/icons-extra.css"
import "./dist/fonts/mui-icons-extra.ttf"


// 引入路由
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false



// 导入格式化时间的组件
import moment from "moment"
// 定义过滤器
Vue.filter("Mytime", function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  // 调用格式化时间的组件
  return moment(dataStr).format(pattern)
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')