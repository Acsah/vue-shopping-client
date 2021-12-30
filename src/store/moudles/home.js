import { reqCategoryList, reqBanners, reqFloors, reqRecommends } from '@/api'

const state = {
    categoryList: [], //商品分类列表
    floors: [], //楼层
    recommends: [],//推荐
    banners: [],//轮播图

}
const mutations = {
    /**
     * 接收保存分类列表到Vuex
     */
    RECEIVE_CATEGORY_LIST_MUTATION(state, list) {
        state.categoryList = list;
    },
    /**
     * 接收轮播图列表数据，保存到vuex
     */
    RECEIVE_BANNERS_MUTATION(state, banners) {
        state.banners = banners;
    },
    /**
     * 接收今日推荐 保存到vuex
     */
    RECEIVE_RECOMMENDS_MUTATION(state, recommends) {
        state.recommends = recommends;
    },
    /**
     * 接收楼层列表 保存到vuex
     */
    RECEIVE_FLOORS_MUTATION(state, floors) {
        state.floors = floors;
    },


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
    },
    /**
     * 异步获取轮播图数据
     */
    async getBanners({ commit }) {
        const res = await reqBanners();
        if (res.code === 200) {
            commit('RECEIVE_BANNERS_MUTATION', res.data)
        }
    },
    /**
     * 异步获取今日推荐数据
     */
    async getRecommends({ commit }) {
        const res = await reqRecommends();
        if (res.code === 200) {
            commit('RECEIVE_RECOMMENDS_MUTATION', res.data)
        }
    },
    /**
     * 异步获取楼层数据
     */
    async getFloors({ commit }) {
        const res = await reqFloors();
        if (res.code === 200) {
            commit('RECEIVE_FLOORS_MUTATION', res.data);
        }
    },


}
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}