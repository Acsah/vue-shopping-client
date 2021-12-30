/** 包含所有的接口请求 */
import Ajax from './ajax'
export const reqCategoryList = () => Ajax.get('');


/**
 * mock 接口函数
 */
import mockAjax from './mockAjax'

export const reqBanners=()=>mockAjax('/banners')
export const reqRecommends=()=>mockAjax('/recommends')
export const reqFloors = () => mockAjax('/floors')
export const reqSearchList=(searchParams)=>mockAjax.post('/list',searchParams)//搜索


// 测试
// reqFloor('/floors').then(res=>{
//     console.log(res);
// })