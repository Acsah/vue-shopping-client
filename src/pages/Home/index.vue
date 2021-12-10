<template>
  <div class="home">
      <!-- 2、导航 -->
      <Nav></Nav>
      <!-- 3、主体区域 -->
      <MainContainer></MainContainer>
      <!-- 4、每日推荐 -->
      <Recommend/>
      <!-- 5、商品排行 -->
      <Rank/>
       <!-- 6、猜你喜欢  -->
      <Like/>
      <!-- 7、楼层区 -->
      <Floor/>
      <!-- 8、固定电梯导航 -->
      <FixedFilt/>
      <!-- 9、商标 -->
      <Brand/>
  </div>
</template>

<script>
import MainContainer from './MainContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import FixedFilt from './FixedFilt'
import Brand from './Brand'
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  components:{
    MainContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    FixedFilt,
    Brand
  }
}
</script>

<style lang="less" scoped>
  
</style>
