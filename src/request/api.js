// 引入
import request from '@/request'
// 引入假的接口
import mockRequest from './mockRequest'

// 获取三级分类接口数据     地址：/api/product/getBaseCategoryList      请求方式：GET
export const GetBaseCategoryList =()=>request({url:'/product/getBaseCategoryList',method:'get'})

// 获取假的首页轮播图数据   地址：/mock/banner  
export const GetBannerList=()=>mockRequest({url:'/banner',method:'get'})

// 获取假的floor数据        地址：/mock/floor
export const GetFloorList=()=>mockRequest({url:'/floor',method:'get'})  

// 获取搜索页数据           地址：/api/list         请求方式：POST
export const GetSearchInfo=(params)=>request({url:'/list',method:'post',data:params})
