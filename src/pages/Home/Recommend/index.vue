<template>
  <!-- 4、推荐服务模块 -->
  <div class="recommend w">
    <div class="recommend-hd fl">
      <img src="../images/clock.png" alt="" />
      <h3>今日推荐</h3>
    </div>
    <div class="recommend-bd fl">
      <ul>
        <li>
          <a href="#">
            <img src="./images/today01.jpg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/today02.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/today03.png" alt="" />
          </a>
        </li>
        <li class="last">
          <a href="#">
            <img src="./images/today04.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
};
</script>

<style lang="less" scoped>
/* 每日推荐 */
.recommend {
  height: 163px;
  margin-top: 10px;

  .recommend-hd {
    width: 200px;
    height: 163px;
    background-color: #5c5251;
    text-align: center;

    img {
      margin: 30px 0 10px 0;
    }

    h3 {
      font-size: 18px;
      color: #fff;
      font-weight: normal;
    }
  }

  .recommend-bd {
    width: 1000px;
    height: 163px;
    background-color: #ebebeb;

    li {
      float: left;
      width: 249px;
      height: 145px;
      border-right: 1px solid #ccc;
      margin-top: 10px;

      &.last {
        border-right: 0;
      }
    }
  }
}
</style>
