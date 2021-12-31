<template>
  <!-- 3、列表 -->
  <div class="searchWrap w">
    <!--(1)面包屑 -->
    <div class="crumbs-bar clearfix">
      <div class="crumbs-all fl">
        <a href="#">全部结果</a>
      </div>
      <i class="crumbs-arrow fl">></i>
      <ul class="crumbs-tags fl">
        <!-- 
          <li v-if="options.keyword" @click="deleteKeyword">{{options.keyword}}<i>×</i></li>
          <li  v-if="options.trademark" @click="deleteTrademark">
          <b>品牌：</b>
          <em>{{ options.trademark }}</em>
        </li> 
        <li  v-for="(prop, index) in options.props" :key="prop" @click="deleteProp(index)">{{prop}}<i>×</i></li>
        -->
        <li>
          <b>机身颜色：</b>
          <em>粉色</em>
        </li>
      </ul>
      <a class="crumbs-category fl" href="#" v-if="options.categoryName">{{
        options.categoryName
      }}</a>
    </div>
    <!--(2)选择 -->
    <Selector @setTrademark="setTrademark" />

    <!--(3)排序 -->
    <div class="sort">
      <ul class="sort-bar">
        <li :class="{ active: orderArr[0] === '1' }" @click="setOrder('1')">
          综合
          <!-- order: '1:desc', // 排序方式  1: 综合,2: 价格  asc: 升序,desc: 降序  "1:desc" -->
          <i
            class="iconfont"
            :class="orderArr[1] === 'desc' ? 'icon-down' : 'icon-up'"
            v-if="orderArr[0] === '1'"
          ></i>
        </li>
        <li :class="{ active: orderArr[0] === '3' }" @click="setOrder('3')">
          <a href="#">销量</a>
          <i
            class="iconfont"
            :class="orderArr[1] === 'desc' ? 'icon-down' : 'icon-up'"
            v-if="orderArr[0] === '3'"
          ></i>
        </li>
        <li :class="{ active: orderArr[0] === '4' }" @click="setOrder('4')">
          <a href="#">新品</a>
        </li>
        <li :class="{ active: orderArr[0] === '5' }" @click="setOrder('5')">
          <a href="#">评价</a>
        </li>
        <li :class="{ active: orderArr[0] === '2' }" @click="setOrder('2')">
          <a href="#">价格</a>
          <i
            class="iconfont"
            :class="orderArr[1] === 'desc' ? 'icon-down' : 'icon-up'"
            v-if="orderArr[0] === '2'"
          ></i>
        </li>
      </ul>
    </div>

    <!--(4)列表 -->
    <div class="main clearfix">
      <div class="goods-list clearfix">
        <!-- <div class="goods-item" v-for="item in goodsList" :key="item.id">
          <div class="goods-img">
            <router-link :to="'/detail/'+item.id">
              <img :src="item.defaultImg" alt="" />
            </router-link>
          </div>
          <div class="goods-price">
            <strong>
              <em>¥</em>
              <i>{{item.price}}</i>
            </strong>
          </div>
          <div class="goods-detail">
            <router-link :to="'/detail/'+item.id">
              {{item.title}}
            </router-link>
          </div>
          <div class="goods-commit">
            <i>已有<span>700</span>人评价</i>
          </div>
          <div class="goods-btns">
            <a class="addCart" href="#">加入购物车</a>
            <a class="attention" href="#">搜藏</a>
          </div>
        </div> -->

        <div class="goods-item">
          <div class="goods-img">
            <router-link :to="'/detail/'+'111'">
              <img src="./images/mobile01.png" alt="" />
            </router-link>
          </div>
          <div class="goods-price">
            <strong>
              <em>¥</em>
              <i>2999.00</i>
            </strong>
          </div>
          <div class="goods-detail">
            <router-link :to="'/detail/'+'111'">
              Apple苹果iPhone 13 Apple苹果iPhone 13Apple苹果iPhone 13苹果
            </router-link>
          </div>
          <div class="goods-commit">
            <i>已有<span>700</span>人评价</i>
          </div>
          <div class="goods-btns">
            <a class="addCart" href="#">加入购物车</a>
            <a class="attention" href="#">搜藏</a>
          </div>
        </div>
        <div class="goods-item">
          <div class="goods-img">
            <img src="./images/mobile01.png" alt="" />
          </div>
          <div class="goods-price">
            <strong>
              <em>¥</em>
              <i>2999.00</i>
            </strong>
          </div>
          <div class="goods-detail">
            Apple苹果iPhone 13 Apple苹果iPhone 13Apple苹果iPhone 13苹果
          </div>
          <div class="goods-commit">
            <i>已有<span>700</span>人评价</i>
          </div>
          <div class="goods-btns">
            <a class="addCart" href="#">加入购物车</a>
            <a class="attention" href="#">搜藏</a>
          </div>
        </div>

        <div class="goods-item">
          <div class="goods-img">
            <img src="./images/mobile01.png" alt="" />
          </div>
          <div class="goods-price">
            <strong>
              <em>¥</em>
              <i>2999.00</i>
            </strong>
          </div>
          <div class="goods-detail">
            Apple苹果iPhone 13 Apple苹果iPhone 13Apple苹果iPhone 13苹果
          </div>
          <div class="goods-commit">
            <i>已有<span>700</span>人评价</i>
          </div>
          <div class="goods-btns">
            <a class="addCart" href="#">加入购物车</a>
            <a class="attention" href="#">搜藏</a>
          </div>
        </div>

        <div class="goods-item">
          <div class="goods-img">
            <img src="./images/mobile01.png" alt="" />
          </div>
          <div class="goods-price">
            <strong>
              <em>¥</em>
              <i>2999.00</i>
            </strong>
          </div>
          <div class="goods-detail">
            Apple苹果iPhone 13 Apple苹果iPhone 13Apple苹果iPhone 13苹果
          </div>
          <div class="goods-commit">
            <i>已有<span>700</span>人评价</i>
          </div>
          <div class="goods-btns">
            <a class="addCart" href="#">加入购物车</a>
            <a class="attention" href="#">搜藏</a>
          </div>
        </div>
        <div class="goods-item">
          <div class="goods-img">
            <img src="./images/mobile01.png" alt="" />
          </div>
          <div class="goods-price">
            <strong>
              <em>¥</em>
              <i>2999.00</i>
            </strong>
          </div>
          <div class="goods-detail">
            Apple苹果iPhone 13 Apple苹果iPhone 13Apple苹果iPhone 13苹果
          </div>
          <div class="goods-commit">
            <i>已有<span>700</span>人评价</i>
          </div>
          <div class="goods-btns">
            <a class="addCart" href="#">加入购物车</a>
            <a class="attention" href="#">搜藏</a>
          </div>
        </div>
        <div class="goods-item">
          <div class="goods-img">
            <img src="./images/mobile01.png" alt="" />
          </div>
          <div class="goods-price">
            <strong>
              <em>¥</em>
              <i>2999.00</i>
            </strong>
          </div>
          <div class="goods-detail">
            Apple苹果iPhone 13 Apple苹果iPhone 13Apple苹果iPhone 13苹果
          </div>
          <div class="goods-commit">
            <i>已有<span>700</span>人评价</i>
          </div>
          <div class="goods-btns">
            <a class="addCart" href="#">加入购物车</a>
            <a class="attention" href="#">搜藏</a>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <!-- <Pagination 
        :currentPage='options.pageNo'
        :total='total'
        :pageSize='options.pageSize'
        :showPageNo='3'
        @currentChange='currentChange'
      /> -->

      <div class="fr page">
        <div class="pagination clearfix">
          <ul>
            <li class="prev disabled">
              <a href="#">«上一页</a>
            </li>
            <li class="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li class="dotted"><span>...</span></li>
            <li class="next">
              <a href="#">下一页»</a>
            </li>
          </ul>
          <div><span>共10页&nbsp;</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Selector from "./Selector";
export default {
  name: "Search",
  data() {
    return {
      options: {
        category1Id: "", // 一级分类ID
        category2Id: "", // 二级分类ID
        category3Id: "", // 三级分类ID
        categoryName: "", // 分类名称
        keyword: "", // 搜索关键字

        trademark: "", // 品牌: "ID:品牌名称" "1:苹果"
        props: [], // 商品属性的数组: ["属性ID:属性值:属性名"] ["2:6.0～6.24英寸:屏幕尺寸"]
        order: "1:desc", // 排序方式  1: 综合,2: 价格 asc: 升序,desc: 降序  "1:desc"

        pageNo: 1, // 页码
        pageSize: 5, //	每页数量
      },
    };
  },
  // 在created中搜集所有参数到options中，并发送搜索请求
  created() {
    this.updateParams();
    this.getGoodsList();
  },
  components: {
    Selector,
  },
  mounted() {},
  computed: {
    ...mapState({
      // searchList初始为空对象，.后容易报错
      // 希望goodsList是个数组，即使没有数据的话，也应该是个空数组,就不会报错了，所以 ||[]来处理
      // 上面的处理可以解决，但是如果别的组件也使用的话，每次都得写 ||[]
      // Vuex给我们提供一个好用的东西 getters 计算属性
      // goodsList:state=>state.selector.searchList.goodsList||[]
      ...mapGetters(["goodsList", "total"]),
    }),
    /**
     * 切割数组，"1:desc" 当前分类项 和 排序方式
     */
    orderArr() {
      return this.options.order.split(":");
    },
  },
  watch: {
    /**
     * 监视路由变化
     */
    $route(to, from) {
      this.updateParams();
      this.getGoodsList();
    },
  },
  methods: {
    /**
     * 更新参数
     */
    updateParams() {
      const { keyword } = this.$route.params;
      const { category1Id, category2Id, category3Id, categoryName } =
        this.$route.query;
      // 合并参数
      this.options = {
        ...this.options,
        keyword,
        category1Id,
        category2Id,
        category3Id,
        categoryName,
      };
    },
    /**
     * 异步获取商品列表
     */
    getGoodsList(page = 1) {
      // 更新options中的pageNo
      this.pageNo = page;
      console.log(this.options);
      // 发送搜索请求
      // this.$store.dispatch("getSearchList", this.options);
    },
    /**
     * 设置品牌
     */
    setTrademark(tradeMark) {
      if (this.options.trademark === tradeMark) return;
      // 不能使trademark变成响应式的
      // this.options.trademark = tradeMark;
      this.$set(this.options, "trademark", tradeMark);
      this.getGoodsList();
    },
    /*
      删除品牌条件
      */
    deleteTrademark() {
      // this.options.trademark = "";
      // delete this.options.trademark //不是响应式的，不会导致界面立马更新
      this.$delete(this.options, "trademark"); //变成响应式，立马删除

      this.getProductList();
    },
    /*
      删除一个属性条件
      */
    deleteProp(index) {
      this.options.props.splice(index, 1);
      this.getProductList();
    },
    /**
     * 切换排序方式
     */
    setOrder(orderFlag) {
      let [flag, type] = this.orderArr;
      // - 点击当前排序项： 切换排序方式(排序项不变)
      if (orderFlag == flag) {
        console.log(type);
        type = type === "desc" ? "asc" : "desc";
      } else {
        // - 点击非当前排序项： 切换排序项，更新orderFlag为指定的值，排序方式默认为：降序desc
        flag = orderFlag;
        type = "desc";
      }
      // 请求获取分页列表
      this.options.order = `${flag}:${type}`;
      this.getGoodsList();
    },
    /**
     * 当前页面发生改变的事件回调
     */
    currentChange(page) {
      // 设置页码
      this.options.pageNo = page;
      // 重新发送请求
      this.getGoodsList();
    },
  },
};
</script>
<style lang="less" scoped>
.searchWrap {
  // 面包屑导航
  .crumbs-bar {
    height: 30px;
    margin: 20px 0;
    font-size: 13px;

    .crumbs-all {
    }

    .crumbs-arrow {
      margin: 0 5px;
    }

    .crumbs-tags {
      margin-right: 5px;

      li {
        position: relative;
        float: left;
        padding: 0 23px 0 7px;
        margin: 0 5px;
        border: 1px solid #ddd;
        background-color: #f3f3f3;

        em {
          color: red;
        }

        &::after {
          content: "x";
          display: block;
          width: 20px;
          position: absolute;
          top: 0;
          right: 0px;
          text-align: center;
          color: red;
        }

        &:hover {
          border: 1px solid red;

          &::after {
            background-color: red;
            color: #fff;
          }
        }
      }
    }
  }

  // 排序
  .sort {
    height: 40px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    background-color: #fbfbfb;

    .sort-bar {
      li {
        float: left;
        padding: 10px;
        font-size: 13px;

        &.active {
          background-color: #e1251b;

          a {
            color: #fff;
          }
        }
      }
    }
  }

  // 列表
  .main {
    // 商品列表
    .goods-list {
      .goods-item {
        float: left;
        width: 20%;
        padding: 0 15px;
        border: 1px solid transparent;
        box-sizing: border-box;

        &:hover {
          border: 1px solid #e1251b;
        }

        .goods-price {
          font-size: 18px;
          color: #c81623;
          font-weight: 900;
        }

        .goods-detail {
          width: 90%;
          margin: 5px 0;
          font-size: 14px;
          cursor: pointer;
          // 两行，超出部分省略号显示
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        .goods-commit {
          font-size: 13px;
          height: 22px;
          color: #a7a7a7;
          margin: 5px 0;

          span {
            font-weight: 700;
            color: #646fb0;
          }
        }

        .goods-btns {
          padding: 10px 0;

          a {
            display: inline-block;
            min-width: 55px;
            text-align: center;
            padding: 2px 14px;
            margin-right: 15px;
          }

          .addCart {
            border: 1px solid #e1251b;
            color: #e1251b;

            &:hover {
              background-color: #e1251b;
              color: #fff;
            }
          }

          .attention {
            border: 1px solid #8c8c8c;

            &:hover {
              background-color: #8c8c8c;
              color: #fff;
            }
          }
        }
      }
    }

    // 分页
    .page {
      width: 733px;
      height: 66px;
      overflow: hidden;
      float: right;

      .pagination {
        margin: 18px 0;

        ul {
          vertical-align: middle;
          width: 490px;
          float: left;

          li {
            line-height: 18px;
            display: inline-block;

            a {
              position: relative;
              float: left;
              border: 1px solid #e0e9ee;
              font-size: 14px;
              padding: 9px 18px;
              color: #333;
            }

            &.active {
              a {
                color: #e1251b;
                border-color: #fff;
                cursor: default;
              }
            }

            &.prev {
              a {
                background-color: #fafafa;
              }
            }

            &.disabled {
              a {
                color: #999;
                cursor: default;
              }
            }

            &.dotted {
              span {
                margin-left: -1px;
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                font-size: 14px;
                border: 0;
                padding: 9px 18px;
                color: #333;
              }
            }

            &.next {
              a {
                background-color: #fafafa;
              }
            }
          }
        }

        div {
          color: #333;
          font-size: 14px;
          float: right;
          width: 241px;
        }
      }
    }
  }
}
</style>
