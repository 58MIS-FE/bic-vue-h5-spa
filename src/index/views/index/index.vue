<template>
    <div class="home">
        <Bscroll></Bscroll>
        <swpierDemo></swpierDemo>
        <div class="" @click="goNewPage">跳转</div>
        <Loading v-if="showLoading"></Loading>
        
    </div>
</template>

<script>
// 滑动组件demo
import Bscroll from '@/index/components/scrollDmeo'
// loading组件demo
import Loading from '@/index/components/loading'
// 轮播图组件demo
import swpierDemo from '@/index/components/swpierDemo'
import { getMethods, postMethods } from "@/index/views/index/sever.js"
export default {

    components:{
        Bscroll,
        Loading,
        swpierDemo
    },
    data(){
        return{
            showLoading:false,
            initdata : [],

        }
    },
    mounted() {
        this.init();
    },
    methods:{
         /**
         *  [init 初始化获取数据]
         *  @param  {[type]} e   [事件源]
         *
         */
        async init() {
            // 传入参数为发送请求时携带的参数
            // let res = await postMethods({
            //     des: "发送post请求"
            // });
            //接受请求回来的数据
            // this.initdata = res   
            // 控制loading取消
            this.showLoading=false
        },
        goNewPage(){
            this.$router.push('/newPage')
        }
    },

}
</script>

<style>

</style>
