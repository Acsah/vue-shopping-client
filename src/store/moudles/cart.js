import { reqAddOrUpdateCart,reqCartList } from "@/api";

const state = {
    goodsDetail: {},//商品详情
    cartList:[]

}
const mutations = {
    /*
        接收商品详情信息
        */
    RECEIVE_CART_LIST(state, cartList) {
        state.cartList = cartList
    },

}
const actions = {
    /**
     * 发送异步请求获取，根据id获取商品详情
     * dispatch 传递多个参数，一定要放到对象中，不能传递多个参数
     */
    async addOrUpdateCart({ commit }, { goodsId, goodsNum }) {
        let res = await reqAddOrUpdateCart(goodsId, goodsNum);

        // 以下写法，返回的 Promise只有成功，【】
        // if(res.code===200){
        //     return 'ok'
        // }else{
        //     return 'failed'
        // }
        res = {
            code: 200
        }
        /** 正确写法，对失败情况创建失败的Promise */
        if (res.code === 200) {
            return 'ok';
        } else {
            return new Promise.reject(new Error('failed'))
        }
    },
    /*
  获取指定skuid的商品信息的异步action
  */
    async getCartList({ commit }) {
        const result = await reqCartList()
        if (result.code === 200) {
            const cartList = result.data
            commit('RECEIVE_CART_LIST', cartList)
        }
    },
}
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters,
}