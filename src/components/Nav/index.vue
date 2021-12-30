<template>
  <div class="nav">
    <div class="w">
      <div class="dropdown fl">
        <div class="dt">全部商品分类</div>
        <div class="dd" v-show="isShowFirstCategory">
          <ul>
            <li class="menu_item">
              <div class="item-title"><a href="#">家用电器</a> <i>  </i></div>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore">
                    <dt>
                      <a href="">电子书1</a>
                    </dt>
                    <dd>
                      <em>
                        <a href="">免费</a>
                      </em>
                      <em>
                        <a href="">小说</a>
                      </em>
                      <em>
                        <a href="">励志与成功</a>
                      </em>
                      <em>
                        <a href="">婚恋/两性</a>
                      </em>
                      <em>
                        <a href="">文学</a>
                      </em>
                      <em>
                        <a href="">经管</a>
                      </em>
                      <em>
                        <a href="">畅读VIP</a>
                      </em>
                    </dd>
                  </dl>
                  <dl class="fore">
                    <dt>
                      <a href="">数字音乐</a>
                    </dt>
                    <dd>
                      <em>
                        <a href="">通俗流行</a>
                      </em>
                      <em>
                        <a href="">古典音乐</a>
                      </em>
                      <em>
                        <a href="">摇滚说唱</a>
                      </em>
                      <em>
                        <a href="">爵士蓝调</a>
                      </em>
                      <em>
                        <a href="">乡村民谣</a>
                      </em>
                      <em>
                        <a href="">有声读物</a>
                      </em>
                    </dd>
                  </dl>
                  <dl class="fore">
                    <dt>
                      <a href="">音像</a>
                    </dt>
                    <dd>
                      <em>
                        <a href="">音乐</a>
                      </em>
                      <em>
                        <a href="">影视</a>
                      </em>
                      <em>
                        <a href="">教育音像</a>
                      </em>
                      <em>
                        <a href="">游戏</a>
                      </em>
                    </dd>
                  </dl>
                  <dl class="fore">
                    <dt>文艺</dt>
                    <dd>
                      <em>
                        <a href="">小说</a>
                      </em>
                      <em>
                        <a href="">文学</a>
                      </em>
                      <em>
                        <a href="">青春文学</a>
                      </em>
                      <em>
                        <a href="">传记</a>
                      </em>
                      <em>
                        <a href="">艺术</a>
                      </em>
                    </dd>
                  </dl>
                  <dl class="fore">
                    <dt>人文社科</dt>
                    <dd>
                      <em>
                        <a href="">历史</a>
                      </em>
                      <em>
                        <a href="">心理学</a>
                      </em>
                      <em>
                        <a href="">政治/军事</a>
                      </em>
                      <em>
                        <a href="">国学/古籍</a>
                      </em>
                      <em>
                        <a href="">哲学/宗教</a>
                      </em>
                      <em>
                        <a href="">社会科学</a>
                      </em>
                    </dd>
                  </dl>
                  <dl class="fore">
                    <dt>经管励志</dt>
                    <dd>
                      <em>
                        <a href="">经济</a>
                      </em>
                      <em>
                        <a href="">金融与投资</a>
                      </em>
                      <em>
                        <a href="">管理</a>
                      </em>
                      <em>
                        <a href="">励志与成功</a>
                      </em>
                    </dd>
                  </dl>
                  <dl class="fore">
                    <dt>生活</dt>
                    <dd>
                      <em>
                        <a href="">家庭与育儿</a>
                      </em>
                      <em>
                        <a href="">旅游/地图</a>
                      </em>
                      <em>
                        <a href="">烹饪/美食</a>
                      </em>
                      <em>
                        <a href="">时尚/美妆</a>
                      </em>
                      <em>
                        <a href="">家居</a>
                      </em>
                      <em>
                        <a href="">婚恋与两性</a>
                      </em>
                      <em>
                        <a href="">娱乐/休闲</a>
                      </em>
                      <em>
                        <a href="">健身与保健</a>
                      </em>
                      <em>
                        <a href="">动漫/幽默</a>
                      </em>
                      <em>
                        <a href="">体育/运动</a>
                      </em>
                    </dd>
                  </dl>
                  <dl class="fore">
                    <dt>科技</dt>
                    <dd>
                      <em>
                        <a href="">科普</a>
                      </em>
                      <em>
                        <a href="">IT</a>
                      </em>
                      <em>
                        <a href="">建筑</a>
                      </em>
                      <em>
                        <a href="">医学</a>
                      </em>
                      <em>
                        <a href="">工业技术</a>
                      </em>
                      <em>
                        <a href="">电子/通信</a>
                      </em>
                      <em>
                        <a href="">农林</a>
                      </em>
                      <em>
                        <a href="">科学与自然</a>
                      </em>
                    </dd>
                  </dl>
                  <dl class="fore">
                    <dt>少儿</dt>
                    <dd>
                      <em>
                        <a href="">少儿</a>
                      </em>
                      <em>
                        <a href="">0-2岁</a>
                      </em>
                      <em>
                        <a href="">3-6岁</a>
                      </em>
                      <em>
                        <a href="">7-10岁</a>
                      </em>
                      <em>
                        <a href="">11-14岁</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </li>
            <li class="menu_item">
              <div class="item-title">
                <a href="list.html">手机</a> 、 <a href="#">数码</a> 、
                <a href="#">通信</a>
                <i>  </i>
              </div>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore">
                    <dt>
                      <a href="">充值</a>
                    </dt>
                    <dd>
                      <em>
                        <a href="recharge.html">充值</a>
                      </em>
                    </dd>
                  </dl>
                  <dl class="fore">
                    <dt>
                      <a href="">电子书2</a>
                    </dt>
                    <dd>
                      <em>
                        <a href="">免费</a>
                      </em>
                      <em>
                        <a href="">小说</a>
                      </em>
                      <em>
                        <a href="">励志与成功</a>
                      </em>
                      <em>
                        <a href="">婚恋/两性</a>
                      </em>
                      <em>
                        <a href="">文学</a>
                      </em>
                      <em>
                        <a href="">经管</a>
                      </em>
                      <em>
                        <a href="">畅读VIP</a>
                      </em>
                    </dd>
                  </dl>
                  <dl class="fore">
                    <dt>
                      <a href="">数字音乐</a>
                    </dt>
                    <dd>
                      <em>
                        <a href="">通俗流行</a>
                      </em>
                      <em>
                        <a href="">古典音乐</a>
                      </em>
                      <em>
                        <a href="">摇滚说唱</a>
                      </em>
                      <em>
                        <a href="">爵士蓝调</a>
                      </em>
                      <em>
                        <a href="">乡村民谣</a>
                      </em>
                      <em>
                        <a href="">有声读物</a>
                      </em>
                    </dd>
                  </dl>
                  <dl class="fore">
                    <dt>
                      <a href="">音像</a>
                    </dt>
                    <dd>
                      <em>
                        <a href="">音乐</a>
                      </em>
                      <em>
                        <a href="">影视</a>
                      </em>
                      <em>
                        <a href="">教育音像</a>
                      </em>
                      <em>
                        <a href="">游戏</a>
                      </em>
                    </dd>
                  </dl>
                  <dl class="fore">
                    <dt>文艺</dt>
                    <dd>
                      <em>
                        <a href="">小说</a>
                      </em>
                      <em>
                        <a href="">文学</a>
                      </em>
                      <em>
                        <a href="">青春文学</a>
                      </em>
                      <em>
                        <a href="">传记</a>
                      </em>
                      <em>
                        <a href="">艺术</a>
                      </em>
                    </dd>
                  </dl>
                  <dl class="fore">
                    <dt>人文社科</dt>
                    <dd>
                      <em>
                        <a href="">历史</a>
                      </em>
                      <em>
                        <a href="">心理学</a>
                      </em>
                      <em>
                        <a href="">政治/军事</a>
                      </em>
                      <em>
                        <a href="">国学/古籍</a>
                      </em>
                      <em>
                        <a href="">哲学/宗教</a>
                      </em>
                      <em>
                        <a href="">社会科学</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </li>
            <li class="menu_item">
              <div class="item-title">
                <a href="#">电脑、办公</a> <i>  </i>
              </div>
            </li>
            <li class="menu_item">
              <div class="item-title">
                <a href="#">家居、家具、家装、厨具</a> <i>  </i>
              </div>
            </li>
            <li class="menu_item">
              <div class="item-title">
                <a href="#">男装、女装、童装、内衣</a> <i>  </i>
              </div>
            </li>
            <li class="menu_item">
              <div class="item-title">
                <a href="#">个户化妆、清洁用品、宠物</a> <i>  </i>
              </div>
            </li>
            <li class="menu_item">
              <div class="item-title">
                <a href="#">鞋靴、箱包、珠宝、奢侈品</a> <i>  </i>
              </div>
            </li>
            <li class="menu_item">
              <div class="item-title">
                <a href="#">运动户外、钟表</a> <i>  </i>
              </div>
            </li>
            <li class="menu_item">
              <div class="item-title">
                <a href="#">汽车、汽车用品</a> <i>  </i>
              </div>
            </li>
            <li class="menu_item">
              <div class="item-title">
                <a href="#">母婴、玩具乐器</a> <i>  </i>
              </div>
            </li>
            <li class="menu_item">
              <div class="item-title">
                <a href="#">食品、酒类、生鲜、特产</a> <i>  </i>
              </div>
            </li>
            <li class="menu_item">
              <div class="item-title"><a href="#">医药保健</a> <i>  </i></div>
            </li>
            <li class="menu_item">
              <div class="item-title">
                <a href="#">图书、音像、电子书</a> <i> </i>
              </div>
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
import { mapState } from "vuex";
export default {
  name: "Nav",
  data() {
    return {
      isShowFirstCategory: false,
    };
  },
  created() {
    const path = this.$route.path;
    console.log(path);
    if (path === "/") {
      this.isShowFirstCategory = true;
    }
  },
  computed: {
    // 第一种方式
    // categotyList(){
    //   return this.$store.state.home.categotyList;
    // },
    // ...mapState(['categotyList']),
    // 第二种方式
    ...mapState({
      categotyList: (state) => state.home.categotyList, //函数接收总状态，返回值作为计算属性值
    }),
  },
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
      position: relative;
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

        .item-title a {
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

        .item-list {
          display: none;
          position: absolute;
          width: 734px;
          min-height: 460px;
          background: #f7f7f7;
          left: 210px;
          border: 1px solid #ddd;
          top: 0;
          z-index: 9999 !important;

          .subitem {
            float: left;
            width: 650px;
            padding: 0 4px 0 8px;

            dl {
              border-top: 1px solid #eee;
              padding: 6px 0;
              overflow: hidden;
              zoom: 1;

              &.fore {
                border-top: 0;
              }

              dt {
                float: left;
                width: 54px;
                line-height: 22px;
                text-align: right;
                padding: 3px 6px 0 0;
                font-weight: 700;
              }

              dd {
                float: left;
                width: 415px;
                padding: 3px 0 0;
                overflow: hidden;

                em {
                  float: left;
                  height: 14px;
                  line-height: 14px;
                  padding: 0 8px;
                  margin-top: 5px;
                  border-left: 1px solid #ccc;
                }
              }
            }
          }
        }

        &:hover {
          .item-list {
            display: block;
          }
          /*鼠标经过li 里面的 a变颜色*/
          .item-title a {
            color: #b1191a;
          }
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
