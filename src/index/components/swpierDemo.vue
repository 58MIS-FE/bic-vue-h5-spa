<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">轮播图组件</div>
        <div class="swiper-slide">2</div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// 引入swiper插件
import Swiper from "swiper";
export default {
  mounted() {
    //  盒子注册轮播图插件
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: false, //是否进行无缝循环
      slidesPerView: "auto", //
      centeredSlides: true,
      //开启分页器
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      },
      spaceBetween: 12, //轮播图之间的间距
      //轮播图触发的函数
      on: {
        // 当轮播图进行切换时触发的函数
        slideChange: function slideChange() {
          var num = Number(this.realIndex);
          console.log(num);
        }
      }
    });
  }
};
</script>

<style>
body,html{
    padding: 0;
    margin: 0;
}
.banner{
    margin-top: 10px;
}
.swiper-container {
  width: 100%;
  height: 140px;
  background: #fff;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: 100%;
  height: 110px;
  background: #ccc;
  border-radius: 8px;
  overflow: hidden;
}
</style>
