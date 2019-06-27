<template>
    <div class="load">
        <div class="con">
            <img src="../assets/loading.gif" alt="" height="140px" >
        </div> 
    </div>
</template>

<script>
export default {

}
</script>

<style>
.load{
    position: fixed;
    top: 0px ;
    left: 0px;
    background: #fff;
    z-index :100;
    height: 100%;
    width: 100%;
}
.con{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>
