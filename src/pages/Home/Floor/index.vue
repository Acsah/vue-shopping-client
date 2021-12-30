<template>
  <!-- 7、楼层区  -->
  <div class="floor">
    <div class="jiadian w">
      <div class="box-hd">
        <h3>{{ floor.name }}</h3>
        <div class="tab-list">
          <ul>
            <li><a href="#" class="style-red">热门</a>|</li>
            <li v-for="(item, index) in floor.navList" :key="index">
              <a href="#">{{ item.text }}</a
              >|
            </li>
          </ul>
        </div>
      </div>
      <div class="box-bd">
        <ul class="tab-con">
          <li class="w209">
            <ul class="tab-con-list">
              <li v-for="(keyword, index) in floor.keywords" :key="index">
                <a href="#">{{ keyword }}</a>
              </li>
            </ul>
            <img :src="floor.imgUrl" alt="" />
          </li>
          <li class="w329">
            <!-- 轮播图 -->
            <!-- <img src="./images/pic1.jpg" alt="" /> -->
            <!-- 轮播图 -->
            <swiper class="swiper" :options="swiperOptions">
              <swiper-slide
                class="swiper-slide"
                v-for="banner in floor.carouselList"
                :key="banner.id"
              >
                <img :src="banner.imageUrl" alt="" />
              </swiper-slide>

              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </li>
          <li class="w219">
            <div class="tab-con-item">
              <a href="#">
                <img :src="floor.recommendList[0]" alt="" />
              </a>
            </div>
            <div class="tab-con-item">
              <a href="#">
                <img :src="floor.recommendList[1]" alt="" />
              </a>
            </div>
          </li>
          <!-- 中间大图 -->
          <li class="w220">
            <div class="tab-con-item">
              <a href="#">
                <img :src="floor.bigImg" alt="" />
              </a>
            </div>
          </li>
          <li class="w220">
            <div class="tab-con-item">
              <a href="#">
                <img :src="floor.recommendList[2]" alt="" />
              </a>
            </div>
            <div class="tab-con-item">
              <a href="#">
                <img :src="floor.recommendList[3]" alt="" />
              </a>
            </div>
          </li>
        </ul>
        <!-- <ul class="tab-con">
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
				</ul> -->
      </div>
    </div>

    <!-- <div class="shouji w">
      <div class="box-hd">
        <h3>手机通讯</h3>
        <div class="tab-list">
          <ul>
            <li><a href="#" class="style-red">热门</a>|</li>
            <li><a href="#">大家电</a>|</li>
            <li><a href="#">生活电器</a>|</li>
            <li><a href="#">厨房电器</a>|</li>
            <li><a href="#">个护健康</a>|</li>
            <li><a href="#">应季电器</a>|</li>
            <li><a href="#">空气/净水</a>|</li>
            <li><a href="#">新奇特</a>|</li>
            <li><a href="#">高端电器</a></li>
          </ul>
        </div>
      </div>
      <div class="box-bd">
        <ul class="tab-con">
          <li class="w209">
            <ul class="tab-con-list">
              <li>
                <a href="#">节能补贴</a>
              </li>
              <li>
                <a href="#">4K电视</a>
              </li>
              <li>
                <a href="#">空气净化器</a>
              </li>
              <li>
                <a href="#">IH电饭煲</a>
              </li>
              <li>
                <a href="#">滚筒洗衣机</a>
              </li>
              <li>
                <a href="#">电热水器</a>
              </li>
            </ul>
            <img src="./images/floor-1-1.png" alt="" />
          </li>
          <li class="w329">
            <img src="./images/pic1.jpg" alt="" />
          </li>
          <li class="w219">
            <div class="tab-con-item">
              <a href="#">
                <img src="./images/floor-1-2.png" alt="" />
              </a>
            </div>
            <div class="tab-con-item">
              <a href="#">
                <img src="./images/floor-1-3.png" alt="" />
              </a>
            </div>
          </li>
          <li class="w220">
            <div class="tab-con-item">
              <a href="#">
                <img src="./images/floor-1-4.png" alt="" />
              </a>
            </div>
          </li>
          <li class="w220">
            <div class="tab-con-item">
              <a href="#">
                <img src="./images/floor-1-5.png" alt="" />
              </a>
            </div>
            <div class="tab-con-item">
              <a href="#">
                <img src="./images/floor-1-6.png" alt="" />
              </a>
            </div>
          </li>
        </ul>
        
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Floor",
  props: {
    floor: Object,
  },
  data() {
    return {
      swiperOptions: {
        // direction: "horizontal", // 水平切换选项
        loop: true, // 循环模式选项
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style lang="less" scoped>
/* 楼层 */
.floor {
  .box-hd {
    height: 30px;
    border-bottom: 2px solid #c81623;
    margin-top: 25px;

    h3 {
      float: left;
      font-size: 18px;
      color: #c81623;
    }

    .tab-list {
      float: right;
      line-height: 30px;

      li {
        float: left;

        a {
          margin: 0 15px;
        }
      }
    }
  }

  .box-bd {
    height: 360px;

    img {
      /*过渡写到本身上， 谁做动画，给谁加*/
      transition: all 0.2s;
    }

    img:hover {
      margin-left: 8px;
    }

    li {
      overflow: hidden;
    }

    .tab-con {
      li {
        float: left;
        height: 360px;

        .tab-con-item {
          border-bottom: 1px solid #ccc;
        }

        &.w209 {
          width: 209px;
          background-color: #f9f9f9;
        }

        &.w329 {
          width: 329px;
        }

        &.w219 {
          width: 219px;
          border-right: 1px solid #ccc;
        }

        &.w220 {
          width: 220px;
          border-right: 1px solid #ccc;
        }

        .tab-con-list {
          overflow: hidden;
          margin-bottom: 15px;

          li {
            width: 86px;
            height: 32px;
            line-height: 32px;
            border-bottom: 1px solid #ccc;
            margin-left: 10px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
