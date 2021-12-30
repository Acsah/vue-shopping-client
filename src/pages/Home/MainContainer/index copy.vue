<template>
  <div class="main-container w">
    <div class="main">
      <!-- 轮播图 -->
      <div class="swiper-container fl">
        <!-- 轮播图 -->
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <a href="#">
              <img src="./images/focus1.jpg" alt="" />
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <img src="./images/focus2.jpg" alt="" />
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <img src="./images/focus1.jpg" alt="" />
            </a>
          </li>
        </ul>
        <!-- 分页 -->
        <ol class="swiper-pagination">
          <li></li>
          <li class="current"></li>
          <li></li>
          <li></li>
        </ol>
        <!-- 左右按钮 -->
        <a href="#" class="arrow-l"> &gt; </a> <a href="#" class="arrow-r">  </a>
      </div>
      <!-- 右侧 新闻快报 -->
      <div class="newsflash fr">
        <div class="news">
          <div class="news-hd">
            京东快报
            <a href="#">更多</a>
          </div>
          <div class="news-bd">
            <ul>
              <li><a href="#">【特惠】爆款耳机5折秒！</a></li>
              <li><a href="#">【特惠】母亲节，健康好礼低至5折！</a></li>
              <li><a href="#">【特惠】爆款耳机5折秒！</a></li>
              <li><a href="#">【特惠】9.9元洗100张照片！</a></li>
              <li><a href="#">【特惠】长虹智能空调立省1000</a></li>
            </ul>
          </div>
        </div>
        <!-- 生活服务 -->
        <div class="lifeservice">
          <ul>
            <li>
              <a href="#">
                <i class="service_ico service_ico_huafei"></i>
                <p>话费</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="service_ico service_ico_feiji"></i>
                <p>机票</p>
              </a>
              <span class="hot"></span>
            </li>
            <li>
              <a href="#">
                <i class="service_ico service_ico_feiji"></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="service_ico service_ico_feiji"></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="service_ico service_ico_feiji"></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="service_ico service_ico_feiji"></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="service_ico service_ico_feiji"></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="service_ico service_ico_feiji"></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="service_ico service_ico_feiji"></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="service_ico service_ico_feiji"></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="service_ico service_ico_feiji"></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="service_ico service_ico_feiji"></i>
                <p>机票</p>
              </a>
            </li>
          </ul>
        </div>
        <!-- 广告 -->
        <div class="bargain">
          <img src="./images/bargain.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "MainContainer",
  data() {
    return {
      
    }
  },
  computed:{
    ...mapState({
      banners:state=>state.home.banners
    })
  },
  mounted(){

  }
};
</script>

<style lang="less" scoped>
/*主体区域 main 模块 start*/
.main-container {
  .main {
    width: 980px;
    height: 455px;
    margin-left: 219px;
    margin-top: 10px;

    // 轮播图
    .swiper-container {
      position: relative;
      width: 720px;
      height: 455px;
      // background-color: purple;

      // .swiper-wrapper {
        .swiper-slide {
          position: absolute;

          img {
            width: 100%;
          }
        }
      // }

      // 分页
      .swiper-pagination {
        position: absolute;
        bottom: 10px;
        left: 50px;

        li {
          float: left;
          width: 8px;
          height: 8px;
          /*background-color: #fff;*/
          border: 2px solid rgba(255, 255, 255, 0.5);
          margin: 0 3px;
          border-radius: 50%;
          /*鼠标经过显示小手*/
          cursor: pointer;

          &.current {
            background-color: #fff;
          }
        }
      }

      // 左按钮
      .arrow-l,
      .arrow-r {
        position: absolute;
        top: 50%;
        margin-top: -20px;
        width: 24px;
        height: 40px;
        background: rgba(0, 0, 0, 0.3);
        text-align: center;
        line-height: 40px;
        color: #fff;
        font-family: "icomoon";
        font-size: 18px;
      }

      .arrow-r {
        right: 0;
      }
    }

    // 京东快报
    .newsflash {
      width: 250px;
      height: 455px;

      // 新闻
      .news {
        height: 163px;
        border: 1px solid #ccc;

        .news-hd {
          height: 32px;
          /*dotted 点线  dashed  虚线*/
          border-bottom: 1px dotted #ccc;
          padding: 0 15px;
          font-size: 14px;
          line-height: 32px;

          a {
            float: right;
            font-size: 12px;
            font-family: "icomoon";
          }
        }

        .news-bd {
          padding: 10px 0 0 15px;

          li {
            height: 23px;
          }
        }
      }

      // 生活服务
      .lifeservice {
        overflow: hidden;
        height: 208px;
        border: 1px solid #ccc;
        border-top: none;

        ul {
          width: 252px;

          li {
            position: relative;
            float: left;
            width: 62px;
            height: 70px;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;

            a {
              display: block;
              /* overflow: hidden; 解决i 引起的 外边距塌陷合并的问题*/
              overflow: hidden;
              height: 100%;

              p {
                text-align: center;
              }

              .service_ico {
                display: block;
                width: 24px;
                height: 24px;
                background: url(../images/icons.png) no-repeat;
                margin: 10px auto;

                &.service_ico_huafei {
                  background-position: -17px -16px;
                }

                &.service_ico_feiji {
                  width: 26px;
                  background-position: -78px -16px;
                }
              }
            }

            .hot {
              position: absolute;
              right: 0;
              top: 0;
              width: 12px;
              height: 15px;
              background: url(../images/jian.jpg) no-repeat;
            }
          }
        }
      }

      // 广告
      .bargain {
        height: 75px;
        margin-top: 5px;
      }
    }
  }
}
</style>
