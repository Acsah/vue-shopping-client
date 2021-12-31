import { reqAddOrUpdateCart } from "@/api";

const state = {
    goodsDetail: {},//商品详情

}
const mutations = {

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
        res={
            code:200
        }
        /** 正确写法，对失败情况创建失败的Promise */
        if (res.code === 200) {
            return 'ok';
        } else {
            return new Promise.reject(new Error('failed'))
        }
    }
}
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters,
}