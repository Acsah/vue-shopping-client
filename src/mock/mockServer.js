/**
 * mockjs提供mock接口
 */
import Mock from 'mockjs'
import Banners from './banner.json'
import Floors from './floors.json'
import Recommends from './recommends.json'


// 提供轮播图接口
Mock.mock('/mock/banners',{
    code:200,
    data:Banners
})

// 提供楼层接口
Mock.mock('/mock/floors',{
    code:200,
    data:Floors
})

// 提供每日推荐
Mock.mock('/mock/recommends',{
    code:200,
    data:Recommends
})

console.log('MockServer');

// 不需要向外暴露任何接口，只要加载到整个项目的打包里去，两个接口就可以通过AJAX请求访问了