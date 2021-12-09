<template>
  <div class="home">
      <Nav></Nav>
      <MainContainer></MainContainer>
      <Recommend/>
      <Rank/>
      <Like/>
      <Floor/>
      <FixedFilt/>
      <Brand/>
  </div>
</template>

<script>
import Nav from '../../components/Nav'
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
    Nav,
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
