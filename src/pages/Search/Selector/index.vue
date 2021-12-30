<template>
  <!--(2)选择 -->
  <div class="selector">
    <div class="sl-wrap clearfix">
      <div class="sl-key">品牌：</div>
      <div class="sl-value">
        <ul class="logo-list">
          <!-- 子组件中设置 品牌名称 -->
          <!-- <li v-if="item in trademarkList" :key="item.tmId" @click="$emit('setTrademark',item.tmId+':'+item.tmName)">{{item.tmName}}</li> -->
          <li>索尼（SONY）</li>
          <li>TCL</li>
          <li>长虹（CHANGHONG）</li>
          <li>飞利浦（PHILIPS）</li>
          <li>风行电视</li>
          <li><img src="./images/phone06.png" /></li>
          <li><img src="./images/phone07.png" /></li>
          <li><img src="./images/phone08.png" /></li>
          <li><img src="./images/phone09.png" /></li>
          <li><img src="./images/phone10.png" /></li>
          <li><img src="./images/phone11.png" /></li>
          <li><img src="./images/phone12.png" /></li>
          <li><img src="./images/phone12.png" /></li>
          <li><img src="./images/phone14.png" /></li>
          <li><img src="./images/phone01.png" /></li>
          <li><img src="./images/phone06.png" /></li>
          <li><img src="./images/phone07.png" /></li>
          <li><img src="./images/phone02.png" /></li>
        </ul>
      </div>
      <div class="sl-ext">
        <a href="javascript:void(0);" class="sl-multiple">多选</a>
        <a href="javascript:void(0);" class="sl-more">更多</a>
      </div>
    </div>

    <!-- <div class="sl-wrap clearfix" v-for="attr in attrsList" :key="attr.attrId">
      <div class="sl-key">{{attr.attrName}}：</div>
      <div class="sl-value">
        <ul class="type-list">
          <li v-for="attrValue in attr.attrValueList" :key="attrValue" @click="$emit('addProp',`${attr.attrId}:${attrValue}:${attr.attrName}`)">
            <a href="#">{{attrValue}}</a>
          </li>
        </ul>
      </div>
    </div> -->

    <div class="sl-wrap clearfix">
      <div class="sl-key">CPU型号：</div>
      <div class="sl-value">
        <ul class="type-list">
          <li>
            <a href="#">骁龙439</a>
          </li>
          <li><a href="#">骁龙730G</a></li>
          <li><a href="#">骁龙845</a></li>
          <li><a href="#">麒麟990</a></li>
        </ul>
      </div>
    </div>
    <div class="sl-wrap clearfix">
      <div class="sl-key">运行内存：</div>
      <div class="sl-value">
        <ul class="type-list">
          <li>
            <a href="#">18GB</a>
          </li>
          <li><a href="#">16GB</a></li>
          <li><a href="#">12GB</a></li>
          <li><a href="#">8GB</a></li>
        </ul>
      </div>
    </div>
    <div class="sl-wrap clearfix">
      <div class="sl-key">屏幕尺寸：</div>
      <div class="sl-value">
        <ul class="type-list">
          <li>
            <a href="#">6.95英寸及以上</a>
          </li>
          <li><a href="#">6.0-6.24英寸</a></li>
          <li><a href="#">6.85-6.94英寸</a></li>
          <li><a href="#">6.75-6.84英寸</a></li>
          <li><a href="#">6.65-6.74英寸</a></li>
          <li><a href="#">6.55-6.64英寸</a></li>
        </ul>
      </div>
    </div>
    <div class="sl-wrap clearfix">
      <div class="sl-key">价格：</div>
      <div class="sl-value">
        <ul class="type-list">
          <li>
            <a href="#">0-500元</a>
          </li>
          <li><a href="#">500-1000元</a></li>
          <li><a href="#">1000-1500元</a></li>
          <li><a href="#">1500-2000元</a></li>
          <li><a href="#">2000-3000元</a></li>
          <li><a href="#">3000元以上</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "",
  props: {},
  computed: {
    ...mapGetters(["trademarkList", "attrsList"]),
  },
};
</script>

<style lang="less" scoped>
// 查询条件
.selector {
  border-top: 1px solid #ddd;
  margin-bottom: 10px;

  .sl-wrap {
    position: relative;
    border-bottom: 1px solid #ddd;
    background-color: #f3f3f3;

    .sl-key {
      float: left;
      width: 100px;
      font-size: 14px;
      padding: 10px 0 0 10px;
    }

    .sl-value {
      background-color: #fff;
      padding: 10px 0 0 15px;
      overflow: hidden;
      // margin-left: 120px;
      padding-right: 70px;

      .logo-list {
        // float: left;
        li {
          float: left;
          border: 1px solid #e4e4e4;
          margin: 0 -1px 5px 0;
          width: 100px;
          height: 50px;
          line-height: 50px;
          padding-left: 10px;
          font-size: 14px;
          font-style: italic;
          color: #e1251b;
          font-weight: 900;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
        }
      }

      .type-list {
        li {
          float: left;
          font-size: 12px;
          line-height: 26px;
          margin-right: 20px;
        }
      }
    }

    .sl-ext {
      position: absolute;
      top: 10px;
      right: 10px;

      .sl-multiple {
      }

      .sl-more {
      }
    }
  }
}
</style>
