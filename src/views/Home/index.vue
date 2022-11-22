<template>
    <div>
        <TypeNav />
        <ListContainer />
        <TodayRecommend />
        <Rank />
        <Like />
        <Floor v-for="floor in floorList" :key="floor.id" :floor='floor'/>
        <Brand />
    </div>
</template>

<script>
// 引入组件
import Brand from './Brand'
import Floor from './Floor'
import Like from './Like'
import ListContainer from './ListContainer'
import Rank from './Rank'
import TodayRecommend from './TodayRecommend'
// 引入辅助函数
import {mapState} from 'vuex'
export default {
    name:'home',
    data () {
        return {
            
        }
    },
    components:{
        Brand,Floor,Like,ListContainer,Rank,TodayRecommend
    },
    computed:{
        ...mapState({
            floorList:(state)=>{
                return state.home.floorList
            }
        })
    },
    mounted(){
        // 派发action 通知仓库发异步请求要floor数据
        this.$store.dispatch('floorlist')
    }
}
</script>
 
<style lang = "less" scoped>
    
</style>