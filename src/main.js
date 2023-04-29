import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "@/router/router";
//图标
import './static/iconfont/iconfont.css'
//视频活动组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//视频播放器
import 'video.js/dist/video-js.css'


Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
