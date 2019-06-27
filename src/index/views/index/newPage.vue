<template>
<div class="newPage">
    <p>新页面</p>
     <Loading v-if="showLoading"></Loading>
</div>
    
</template>

<script>
// loading组件demo
import Loading from '@/index/components/loading'
export default {
    components:{
        Loading,
    },
    data(){
        return{
            showLoading:true
        }
    },
    methods:{
        
    }

}
</script>

<style>
.newPage{
    width: 100%;
    height: 100%;
}
</style>
