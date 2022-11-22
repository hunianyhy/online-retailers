// 引入API
import { GetSearchInfo } from "@/request/api"
const state = {
    searchList:{}
}
const getters = {
    // 手机参数数据
    goodsList(state){
        return state.searchList.goodsList || []
    },
    // 商品参数
    attrsList(state){
        return state.searchList.attrsList || []
    },
    // 手机品牌
    trademarkList(state){
        return state.searchList.trademarkList || []
    }
}
const mutations = {
    // 搜索商品数据
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
const actions = {
    // 获取搜索商品数据
    async GetSearchList({commit},params={}){
        let res = await GetSearchInfo(params)
        // console.log(res);
        if(res.code==200){
            commit('GETSEARCHLIST',res.data)
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}