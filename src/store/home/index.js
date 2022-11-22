// 引入接口API
import {GetBaseCategoryList,GetBannerList,GetFloorList} from '@/request/api'
const state = {
    // 三级分类数据
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const getters = {

}
const mutations = {
    // 三级分类
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    // 首页轮播图
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    // floor
    FLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
const actions = {
    // 获取三级分类数据
    async categoryList({commit}){
        let res = await GetBaseCategoryList()
        // console.log(res);
        if(res.code==200){
            commit('CATEGORYLIST',res.data)
        }
    },
    // 获取首页轮播图数据
    async bannerlist({commit}){
        let res = await GetBannerList()
        // console.log(res);
        if(res.code == 200){
            commit('BANNERLIST',res.data)
        }
    },
    // 获取floor数据
    async floorlist({commit}){
        let res = await GetFloorList()
        console.log(res);
        if(res.code==200){
            commit('FLOORLIST',res.data)
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}