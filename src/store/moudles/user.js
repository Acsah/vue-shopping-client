import {getUserTempId} from '@/utils/userAbout'
/**
 * 管理登录用户数据的Vuex子模块
 */
const state={
    // getUserTempId() 一上来就获取临时标识Id
    userTempId:getUserTempId(),
}
const mutations={

}
const actions={

}
const getters={

}

export default {
    state,
    mutations,
    actions,
    getters,
}