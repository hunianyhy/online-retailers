// 引入axios
import axios from 'axios'
// 引入进度条和进度条样式
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'
// ----------------
// 二次封装axios，利用axios对象的方法create，创建一个axios实例
// instance就是axios，不过需要配置一下
const instance = axios.create({
    // 配置对象，
    baseURL:'/mock',         //基础路径，发请求的时候，路径当中会出现api
    // 请求超时时间五秒
    timeout:5000
})
// 请求拦截器
instance.interceptors.request.use(config=>{
    // config，配置对象，里面有一个请求头
    // console.log("每一次发起请求前，都会先执行这里的代码");
    // console.log(config); //config 本次请求的配置信息
    // 进度条开始
    nprogress.start()
    return config
}),err=>{
    return Promise.reject(err)
}
// 响应拦截器
instance.interceptors.response.use(res=>{
    // 响应成功的回调函数
    // console.log("每一次接收到响应，都会先执行这里的代码，再去执行成功的那个回调函数then");
    // 进度条结束
    nprogress.done()
    return res.data;
}),err=>{
    // 响应失败的回调函数
    return Promise.reject(err)

}
// 对外导出
export default instance