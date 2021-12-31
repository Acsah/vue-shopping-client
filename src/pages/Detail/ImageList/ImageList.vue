<template>
  <!-- 轮播图 -->
  <swiper class="swiper" :options="swiperOptions">
    <swiper-slide
      class="swiper-slide"
      v-for="(img, index) in imgList"
      :key="img.id"
    >
      <img
        :src="img.imgUrl"
        :class="{ active: index === defaultIndex }"
        @click="changeIndex(index)"
      />
    </swiper-slide>

    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>

  <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img, index) in imgList" :key="img.id">
        <img src="../images/s1.png" />
        <img
          :src="img.imgUrl"
          :class="{ active: index === defaultIndex }"
          @click="changeIndex(index)"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div> -->
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  props: ["imgList"],
  data() {
    return {
      defaultIndex: 0, //默认选中图片下标
      swiperOptions: {
        // 设置slider容器能够同时显示的slides数量(carousel模式)
        slidesPerView: 5,
        // 在carousel mode下定义slides的数量多少为一组。
        slidesPerGroup: 3,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    changeIndex(index) {
      this.defaultIndex = index;
      // 通过全局事件总线，向 Zoom 组件发送数据
      this.$bus.$emit("syncDefaultIndex", index);
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    // width: 56px;
    // height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>