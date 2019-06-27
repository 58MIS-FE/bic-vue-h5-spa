import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/index/views/index/index'
import newPage from '@/index/views/index/newPage'

Vue.use(VueRouter);
/* webpackChunkName: "home-index-component" */

const routes = [{
    path: '*',
    redirect: '/home',
},
{
    path: '/home',
    name: 'home',
    component:index
},
{
    path: '/newPage',
    name: 'newPage',
    component:newPage
},

];
const router = new VueRouter({
    routes: routes
});

export default router;