<template>
  <!-- 8、固定电梯导航 -->
  <div class="fixedtool">
    <ul>
      <li class="current">家用电器</li>
      <li>手机通讯</li>
      <li>家用电器</li>
      <li>家用电器</li>
      <li>家用电器</li>
      <li>家用电器</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FixedFilt",
};
</script>

<style lang="less" scoped>
/*电梯导航*/
.fixedtool {
  position: fixed;
  top: 100px;
  left: 50%;
  margin-left: -676px;
  width: 66px;
  background-color: #fff;

  li {
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 12px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;

    &.current {
      background-color: #c81623;
      color: #fff;
    }
  }
}
</style>
