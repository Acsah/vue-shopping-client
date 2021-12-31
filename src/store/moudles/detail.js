import { reqGoodsDetail } from "@/api";

const state = {
    goodsDetail: {},//商品详情

}
const mutations = {
    /**
     * 接收商品详情，并保存到Vuex中
     */
    RECEIVE_GOODSLIST_MUTATION(state, detail) {
        state.goodsDetail = detail;
    }

}
const actions = {
    /**
     * 发送异步请求获取，根据id获取商品详情
     */
    async getGoodsDetail({ commit }, goodsId) {
        // const res = await reqGoodsDetail(goodsId);
        // if(res.code===200){
        //     commit('RECEIVE_GOODSLIST_MUTATION',res.data);
        // }
    }
}
const getters = {
    /* 
    返回三级分类名称数据的对象
    */
    categoryView (state) {
      const categoryView = state.goodsDetail.categoryView
      return categoryView ? categoryView : {}
    },
  
    /* 
    返回商品sku相关信息对象
    */
    goodsInfo(state){
      const skuInfo = state.goodsDetail.skuInfo
      return skuInfo ? skuInfo : {}
    },
  
    /* 
    返回商品的轮播的图片数组
    */
    goodsImageList(state){
      const skuInfo = state.goodsDetail.skuInfo
      return skuInfo ? skuInfo.skuImageList : []
    },
    
    /* 
    返回商品SPU销售属性列表
    */
    spuSaleAttrList(state){
      const spuSaleAttrList = state.goodsDetail.spuSaleAttrList
      return spuSaleAttrList ? spuSaleAttrList : []
    }
  }

export default {
    state,
    mutations,
    actions,
    getters,
}