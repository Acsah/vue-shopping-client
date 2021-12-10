import { reqCategoryList } from '@/api'

const state = {
    categoryList: [], //商品分类列表

}
const mutations = {
    /**
     * 接收保存分类列表到Vuex
     */
    RECEIVE_CATEGORY_LIST_MUTATION(state, list) {
        state.categoryList = list;
    }

}
const actions = {
    /**
     * 异步获取商品分类列表
     */
    async getCategoryList({ commit }) {
        const res = await reqCategoryList();
        if (res.code === 200) {
            commit('RECEIVE_CATEGORY_LIST_MUTATION', res.data);
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