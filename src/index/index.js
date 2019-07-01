import Vue from 'vue';
import router from './router';
import App from './App';
import 'lib-flexible/flexible.js';     //引入手淘团队js  进行页面自适应
import '@/index/assets/swiper.css'
import'@/index/assets/theme.css'      // 引入公共样式




new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
