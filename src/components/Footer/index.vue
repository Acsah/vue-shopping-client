<template>
  <!-- footer start -->
  <footer class="footer">
    <div class="w">
      <!-- service -->
      <div class="service">
        <ul>
          <li>
            <i class="service-icon service_zheng"></i>
            <div class="service_tit">
              <h5>正品保障</h5>
              <p>正品保障，提供发票</p>
            </div>
          </li>
          <li>
            <i class="service-icon service_kuai"></i>
            <div class="service_tit">
              <h5>正品保障</h5>
              <p>正品保障，提供发票</p>
            </div>
          </li>
          <li>
            <i class="service-icon service_bao"></i>
            <div class="service_tit">
              <h5>正品保障</h5>
              <p>正品保障，提供发票</p>
            </div>
          </li>
          <li>
            <i class="service-icon service_bao"></i>
            <div class="service_tit">
              <h5>正品保障</h5>
              <p>正品保障，提供发票</p>
            </div>
          </li>
          <li>
            <i class="service-icon service_bao"></i>
            <div class="service_tit">
              <h5>正品保障</h5>
              <p>正品保障，提供发票</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- help -->
      <div class="help">
        <dl class="help-item">
          <dt>购物指南</dt>
          <dd><a href="#">购物流程 </a></dd>
          <dd><a href="#">会员介绍 </a></dd>
          <dd><a href="#">生活旅行/团购 </a></dd>
          <dd><a href="#">常见问题 </a></dd>
          <dd><a href="#">大家电 </a></dd>
          <dd><a href="#">联系客服 </a></dd>
        </dl>
        <dl class="help-item">
          <dt>购物指南</dt>
          <dd><a href="#">购物流程 </a></dd>
          <dd><a href="#">会员介绍 </a></dd>
          <dd><a href="#">生活旅行/团购 </a></dd>
          <dd><a href="#">常见问题 </a></dd>
          <dd><a href="#">大家电 </a></dd>
          <dd><a href="#">联系客服 </a></dd>
        </dl>
        <dl class="help-item">
          <dt>购物指南</dt>
          <dd><a href="#">购物流程 </a></dd>
          <dd><a href="#">会员介绍 </a></dd>
          <dd><a href="#">生活旅行/团购 </a></dd>
          <dd><a href="#">常见问题 </a></dd>
          <dd><a href="#">大家电 </a></dd>
          <dd><a href="#">联系客服 </a></dd>
        </dl>
        <dl class="help-item">
          <dt>购物指南</dt>
          <dd><a href="#">购物流程 </a></dd>
          <dd><a href="#">会员介绍 </a></dd>
          <dd><a href="#">生活旅行/团购 </a></dd>
          <dd><a href="#">常见问题 </a></dd>
          <dd><a href="#">大家电 </a></dd>
          <dd><a href="#">联系客服 </a></dd>
        </dl>
        <dl class="help-item">
          <dt>购物指南</dt>
          <dd><a href="#">购物流程 </a></dd>
          <dd><a href="#">会员介绍 </a></dd>
          <dd><a href="#">生活旅行/团购 </a></dd>
          <dd><a href="#">常见问题 </a></dd>
          <dd><a href="#">大家电 </a></dd>
          <dd><a href="#">联系客服 </a></dd>
        </dl>
        <dl class="help-item help-app">
          <dt>帮助中心</dt>
          <dd>
            <img src="./images/erweima.png" alt="" />
            <p>京东客户端</p>
          </dd>
        </dl>
      </div>

      <!-- copyright  -->
      <div class="copyright">
        <p class="copyright_links">
          关于我们 | 联系我们 | 联系客服 | 商家入驻 | 营销中心 | 手机京东 |
          友情链接 | 销售联盟 | 京东社区 | 京东公益 | English Site | Contact U
        </p>
        <p class="copyright_info">
          Copyright © 2004 - 2020 京东JD.com
          版权所有|消费者维权热线：4006067733经营证照|(京)网械平台备字(2018)第00003号|营业执照
          <br />
          京ICP备08001421号京公网安备110110110
        </p>
      </div>
    </div>
  </footer>
  <!-- footer end -->
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
/* 公共底部 start */
.footer {
  height: 400px;
  background-color: #f5f5f5;
  padding-top: 30px;

  // 服务
  .service {
    height: 80px;
    border-bottom: 1px solid #ccc;

    li {
      float: left;
      width: 240px;
      height: 80px;

      .service-icon {
        /*浮动的盒子 可以直接给大小的 不需要转换*/
        float: left;
        width: 50px;
        height: 50px;
        margin-left: 35px;
        background: url(./images/icons.png) no-repeat;

        &.service_zheng {
          background-position: -253px -3px;
        }

        &.service_kuai {
          background-position: -255px -54px;
        }

        &.service_bao {
          background-position: -257px -105px;
        }
      }

      .service_tit {
        float: left;
        margin-left: 5px;

        h5 {
          margin: 5px 0;
        }
      }
    }
  }

  // 帮助
  .help {
    height: 188px;
    border-bottom: 1px solid #ccc;

    .help-item {
      float: left;
      width: 150px;
      padding: 20px 0 0 50px;

      dt {
        height: 25px;
        font-size: 16px;
      }

      dd {
        height: 22px;
      }

      &.help-app {
        dt,
        p {
          padding-left: 15px;
        }

        img {
          margin: 7px 0;
        }
      }
    }
  }

  // 版权所有
  .copyright {
    text-align: center;

    .copyright_links {
      margin: 20px 0 15px 0;
    }

    .copyright_info {
      line-height: 18px;
    }
  }
}
/* 公共底部 end */
</style>
