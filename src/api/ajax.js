/**
 * 1、配置基础路径和超时时间
 * 2、进度条显示、隐藏
 * 3、请求拦截器
 * 4、响应拦截器，统一处理数据
 */
import Axios from 'axios'
import Ngprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 1、配置基础路径和超时时间
const service = Axios.create({
    // 前面为什么不加http://localhost:3000/ 
    // 因为每次启动的端口号不固定，默认会找启动的端口号
    baseURL: '/api',
    timeout: 20000
})

// 3、请求拦截器
service.interceptors.request.use(config => {
    // 显示进度条
    Ngprogress.start();
    // 添加统一请求头

    return config;
})

// 4、响应拦截器，统一处理数据
service.interceptors.response.use(res => {
    // 隐藏进度条
    Ngprogress.done();

    // 统一处理返回结果

    return res.data;
}, err => {
    // 隐藏进度条
    Ngprogress.done();

    // 统一处理错误
    alert(`请求出错：${err || '未知错误'}`)
    // throw err;
    return Promise.reject(err);
})


export default service;