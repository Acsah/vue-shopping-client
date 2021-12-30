import { reqSearchList } from '@/api'

const state = {
    searchList: {},
}

const mutations = {
    /**
     * 接收 搜索列表，并保存到Vuex
     */
    RECEIVE_SEARCHLIST_MUTATION(state, searchList) {
        state.searchList = searchList;
    }
}

const actions = {
    /**
     * 异步获取搜索列表数据
     * @param {*} state 
     * @param {object} searchParams 
     */
    async getSearchList({ commit }, searchParams) {
        // 浅拷贝
        searchParams = { ...searchParams };
        // 删除参数对象中的空字符串或者空数组
        Object.keys(key => {
            // 判断是空字符串，或者是空数组，则删除
            /* 但是，删除会对组件中对象有影响，所以，需要拷贝一份；浅拷贝则可以 */
            if (searchParams[key] === '' || (Array.isArray(searchParams[key]) && searchParams[key].length == 0)) {
                delete searchParams[key];
            }
        })



        const res = await reqSearchList(searchParams);
        if (res.code === 200) {
            commit('RECEIVE_SEARCHLIST_MUTATION', res.data)
        }

    }
}
// 对外提供计算属性
const getters = {
    // 返回品牌列表
    trademarkList(state) {
        return state.productList.trademarkList || []
    },

    // 返回属性列表
    attrsList(state) {
        return state.productList.attrsList || []
    },
    /** 商品分页列表 */
    goodsList(state) {
        // 处理空数组.的问题
        return state.searchList.goodsList || []
    },
    /**总数量 */
    total(state){
        return state.goodsList.total||0;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}