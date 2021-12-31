<template>
  <div class="spec-preview">
    <img src="../images/s1.png" />
    <!-- imgList很有可能是空数组 A.B.C格式很容易报错，所以尽量只出现 A.B模式 -->
    <!-- <img :src="imgList[defaultIndex].imgUrl" /> -->
    <!-- // 避免上面的 A.B.C 格式报错 -->
    <!-- <img :src="defaultImg" /> -->

    <div class="event" @mousemove="move"></div>
    <div class="big">
      <img src="../images/s1.png" />
      <!-- // 避免上面的 A.B.C 格式报错 -->
      <!-- <img :src="defaultImg" /> -->
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["imgList"],
  data() {
    return {
      // 显示图片的默认下标
      defaultIndex: 0,
    };
  },
  mounted() {
    // 通过全局事件总线接收 ImageList 发送来的数据
    this.$bus.$on("syncDefaultIndex", this.syncDefaultIndex);
  },
  computed: {
    // 避免上面的 A.B.C 格式报错；解决假报错，不能在上面写 imgList[defaultIndex].imgUrl
    // defaultImg() {
    //   return this.imgList[this.defaultIndex] || {};
    // },
  },
  methods: {
    syncDefaultIndex(index) {
      // this.defaultIndex=index;
    },
    move(){
      
    }
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>