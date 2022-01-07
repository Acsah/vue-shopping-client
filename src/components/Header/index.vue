<template>
  <header class="header-wrap">
    <!-- 顶部快捷导航 start -->
    <div class="shortcut">
      <div class="w">
        <!-- 左侧 -->
        <div class="fl">
          <ul>
            <li>京东欢迎您！</li>
            <li>
              <a href="#">登录</a>
            </li>
            <li>
              <a href="#">免费注册</a>
            </li>
          </ul>
        </div>
        <!-- 右侧 -->
        <div class="fr">
          <ul>
            <li><a href="#">我的订单</a></li>
            <li><a href="#">我的京东</a></li>
            <li><a href="#">京东会员</a></li>
            <li><a href="#">企业采购</a></li>
            <li><a href="#">专注京东</a><i class="icomoon"></i></li>
            <li><a href="#">客户服务</a><i class="icomoon"></i></li>
            <li><a href="#">网站导航</a><i class="icomoon"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 顶部快捷导航 end -->

    <!-- header start -->
    <div class="header w">
      <!-- logo -->
      <div class="logo">
        <h1>
          <!-- 声明式导航 -->
          <router-link to="/">
            <img src="./images/logo.png" alt="" />
          </router-link>
        </h1>
      </div>

      <!-- search -->
      <div class="search">
        <!-- <input type="text" class="txtSearch fl" value="请输入搜索内容...." /> -->
        <input
          type="text"
          class="txtSearch fl"
          placeholder="请输入搜索内容"
          v-model="keyword"
        />
        <button class="btnSearch fl" @click="toSearch">搜索</button>
        <!-- hotwrods -->
        <div class="hotwrods">
          <a href="#" class="style-red">优惠购首发</a>
          <a href="#">亿元优惠</a>
          <a href="#">9.9元团购</a>
          <a href="#">美满99减30</a>
          <a href="#">办公用品</a>
          <a href="#">电脑</a>
          <a href="#">通信</a>
        </div>
      </div>
      <!-- cart -->
      <div class="shopcart">
        <router-link to="/shopcart">
          <i class="cart"> </i>我的购物车 <i class="arrow">  </i>
          <i class="count">80</i>
        </router-link>
      </div>
    </div>
    <!-- header end -->
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    toSearch() {
      // 编程式路由导航
      // this.$router.push("/search");
      // this.$router.push(`/search/${this.keyword}`);
      // 第二种写法
      this.$router.push({
        name: "search",
        params: {
          keyword: this.keyword,
        },
        query: {
          keyword2: this.keyword.toUpperCase(),
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
/* 公共头部 start */
.header-wrap {
  // 顶部快捷导航
  .shortcut {
    height: 31px;
    line-height: 31px;
    background-color: #f1f1f1;

    li {
      float: left;
    }

    .fr {
      a {
        padding: 0 10px;
      }

      li + li {
        a {
          border-left: 1px solid #666;
        }
      }
    }
  }

  // 头部
  .header {
    position: relative;
    height: 105px;
    line-height: 105px;

    .logo {
      position: absolute;

      img {
        width: 270px;
        height: 60px;
      }
    }

    .search {
      position: absolute;
      top: 25px;
      left: 348px;

      .txtSearch {
        width: 445px;
        height: 32px;
        border: 2px solid #b1191a;
        padding-left: 10px;
      }

      .btnSearch {
        width: 82px;
        height: 36px;
        font-size: 16px;
        border: 0;
        background-color: #b1191a;
        color: #fff;
      }

      .hotwrods {
        height: 40px;
        line-height: 40px;
        a {
          margin: 0 10px;
        }
      }
    }

    .shopcart {
      position: absolute;
      top: 25px;
      right: 64px;
      width: 138px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border: 1px solid #dfdfdf;
      background-color: #f7f7f7;

      .cart {
        font-family: "icomoon";
        color: #da5555;
      }

      .arrow {
        font-family: "icomoon";
        margin-left: 5px;
      }

      .count {
        position: absolute;
        top: -5px;
        /*应该是左侧对齐 文字才能往右走显示*/
        left: 100px;
        background-color: #e60012;
        height: 14px;
        padding: 0 3px;
        line-height: 14px;
        color: #fff;
        /*border-radius: 左上角 右上角  右下角  左下角;*/
        border-radius: 7px 7px 7px 0;
      }
    }
  }
}
/* 公共头部 end */
</style>
