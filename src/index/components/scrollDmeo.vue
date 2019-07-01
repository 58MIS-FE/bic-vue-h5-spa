<template>
    <div class="scrollDmeo" ref="scrollDmeo">
        <div class="scroll">
            <div class="downTag" v-if="downTag">刷新中</div>
            <ul>
                <li v-for="(item , index) in arr" :key="index">{{item}}</li>
            </ul>
            <div class="upTag" v-if="upTag">加载中</div>
        </div>
    </div>
</template>

<script>
// 引入better-scroll组件
import Bscroll from 'better-scroll'
// 引入发送请求函数
import { getMethods, postMethods } from "@/index/views/index/sever.js"
export default {
    mounted () {
        this.$nextTick(() => {
            this.initScroll();
        })
    },
    data(){
        return{
            upTag:false,
            downTag:false,
            arr:[1,2,3,4,5,6,7]
        }
    },

    methods : {
        // 初始化滑动区域函数
        initScroll () {
            // 判断如果页面不存在当前注册的dom就跳出函数
            if(!this.$refs.scrollDmeo){
                return;
            }else{

                /**
                 * Bscroll构造函数   
                 * 第一个参数是 初始化dom对象
                 * 第二个参数  滑动配置项
                 */
                this.myScrollDemo = new Bscroll(this.$refs.scrollDmeo,{
                    scrollX: true,     //开启左右滑动
                    scrollY: true,     //开启上下滑动
                    probeType: 3,
                    pullUpLoad:{       //配置开启上拉加载功能
                        threshold:20,  //开启上拉加载的位置
                    },
                    pullDownRefresh:{  //配置开启下拉刷新功能
                        threshold:40,  //开启下拉刷新的位置
                        stop:20        //刷新过程中上部留白的高度
                    },

                })

                // 当进行上拉动作时执行的函数
                this.myScrollDemo.on('pullingUp',() =>{ 
                    this.upTag = true;
                    console.log('上拉加载');
                    this.nextPage();   //请求新数据函数
                    
                   
                    // 定时器模拟请求数据
                    // setTimeout(()=>{
                    // for(let i = 0;i<5;i++){
                    //     this.arr.push(this.arr.length + 1);
                    //     console.log(this.arr);
                    // }
                    //     this.upTag = false;
                    //     this.myScrollDemo.finishPullUp();
                    //     this.myScrollDemo.refresh(); 
                    // },1000)
                });

                // 当进行下拉动作时执行的函数
                this.myScrollDemo.on('pullingDown',() =>{ 
                    this.downTag = true;
                    console.log('下拉刷新');
                    this.getinitData();   //下拉刷新执行函数
                    // 定时器模拟请求数据
                    // setTimeout(()=>{
                    //     this.arr = [1,2,3,4,5,6,7]
                    //     this.downTag = false;
                    //     this.myScrollDemo.finishPullDown();
                    //     this.myScrollDemo.refresh();
                    // },1000)
                    
                })  
            }
        },
        async nextPage() {
            // 传入参数为发送请求时携带的参数
            let res = await postMethods({
                des: "发送post请求"
            });
            this.upTag = false;
            this.myScrollDemo.finishPullUp();
            this.myScrollDemo.refresh(); 
            
        },
        async getinitData() {
            // 传入参数为发送请求时携带的参数
            let res = await getMethods({
                des: "发送get请求"
            });
            this.downTag = false;
            this.myScrollDemo.finishPullDown();
            this.myScrollDemo.refresh();
            
        },

    }

}
</script>

<style>
/* 注册区域的最外层盒子要有固定的宽高,且要设置overflow: hidden */
.scrollDmeo{
    width: 100%;
    height: 200px;
    overflow: hidden;
    background-color: #777;
}
li{
    height: 40px;
}

</style>
