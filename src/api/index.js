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
export const reqGoodsDetail=(goodsId)=>mockAjax(`/detail/${goodsId}`) //详情
// 添加购物车（修改购物车商品数量）
// /api/cart/addToCart/{ goodsId }/{ goodsNum }
export const reqAddOrUpdateCart=(goodsId,goodsNum)=>Ajax.post(`/cart/addToCart/${goodsId}/${goodsNum}`)

// 测试
// reqFloor('/floors').then(res=>{
//     console.log(res);
// })