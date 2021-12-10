<template>
  <div class="nav">
    <div class="w">
      <div class="dropdown fl">
        <div class="dt">全部商品分类</div>
        <div class="dd">
          <ul>
            <li class="menu_item"><a href="#">家用电器</a> <i>  </i></li>
            <li class="menu_item">
              <a href="list.html">手机</a> 、 <a href="#">数码</a> 、
              <a href="#">通信</a>
              <i>  </i>
            </li>
            <li class="menu_item"><a href="#">电脑、办公</a> <i>  </i></li>
            <li class="menu_item">
              <a href="#">家居、家具、家装、厨具</a> <i>  </i>
            </li>
            <li class="menu_item">
              <a href="#">男装、女装、童装、内衣</a> <i>  </i>
            </li>
            <li class="menu_item">
              <a href="#">个户化妆、清洁用品、宠物</a> <i>  </i>
            </li>
            <li class="menu_item">
              <a href="#">鞋靴、箱包、珠宝、奢侈品</a> <i>  </i>
            </li>
            <li class="menu_item"><a href="#">运动户外、钟表</a> <i>  </i></li>
            <li class="menu_item"><a href="#">汽车、汽车用品</a> <i>  </i></li>
            <li class="menu_item"><a href="#">母婴、玩具乐器</a> <i>  </i></li>
            <li class="menu_item">
              <a href="#">食品、酒类、生鲜、特产</a> <i>  </i>
            </li>
            <li class="menu_item"><a href="#">医药保健</a> <i>  </i></li>
            <li class="menu_item">
              <a href="#">图书、音像、电子书</a> <i> </i>
            </li>
            <li class="menu_item">
              <a href="#">彩票、旅行、充值、票务</a> <i> </i>
            </li>
            <li class="menu_item">
              <a href="#">理财、众筹、白条、保险</a> <i>  </i>
            </li>
          </ul>
        </div>
      </div>
      <!-- 右侧导航 -->
      <div class="navitems fl">
        <ul>
          <li><a href="#">服装城</a></li>
          <li><a href="#">美妆馆</a></li>
          <li><a href="#">京东超市</a></li>
          <li><a href="#">全球购</a></li>
          <li><a href="#">闪购</a></li>
          <li><a href="#">团购</a></li>
          <li><a href="#">拍卖</a></li>
          <li><a href="#">有趣</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Nav",
  data() {
    return {
      
    }
  },
  computed:{
    // 第一种方式
    // categotyList(){
    //   return this.$store.state.home.categotyList;
    // },
    // ...mapState(['categotyList']),  
    // 第二种方式
    ...mapState({
       categotyList:state=>state.home.categotyList //函数接收总状态，返回值作为计算属性值
    })
  }
};
</script>

<style lang="less" scoped>
/* 导航栏 start */
.nav {
  height: 45px;
  border-bottom: 2px solid #b1191a;

  .dropdown {
    width: 209px;
    height: 45px;

    // 上面
    .dt {
      background-color: #b1191a;
      font-size: 16px;
      color: #fff;
      text-align: center;
      line-height: 45px;
    }

    // 下面
    .dd {
      height: 465px;
      background-color: #c81623;
      margin-top: 2px;

      .menu_item {
        height: 31px;
        line-height: 31px;
        margin-left: 1px;
        /* 如果盒子没有宽度，设置padding 不会撑开盒子 */
        padding: 0 10px;
        transition: all 0.5s;

        a {
          font-size: 14px;
          color: #fff;
        }

        i {
          float: right;
          font-family: "icomoon";
          font-size: 18px;
          color: #fff;
        }

        &:hover {
          background-color: #fff;
          padding-left: 20px;
        }

        /*鼠标经过li 里面的 a变颜色*/
        &:hover a {
          color: #c81623;
        }
      }
    }
  }

  // 右侧导航
  .navitems {
    margin-left: 10px;
    li {
      float: left;

      a {
        display: block;
        height: 45px;
        line-height: 45px;
        padding: 0 25px;
        font-size: 16px;
      }
    }
  }
}
/* 导航栏 end */
</style>
