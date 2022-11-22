// 引入Mock
import Mock from 'mockjs'
// 引入两个json数据
import banner from './banner.json'
import floor from './floor.json'

// mock数据
// 有两个参数，第一个参数是请求的地址，第二个参数是数据
Mock.mock('/mock/banner',{code:200, data:banner})          //模拟首页banner数据
Mock.mock('/mock/floor',{code:200, data:floor})            //模拟首页floor数据
// 然后在全局文件(main.js)引入，执行一次