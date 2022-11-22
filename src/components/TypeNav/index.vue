<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" >
      <!-- 事件委托,将鼠标移出放在这里 -->
      <div @mouseleave="leaveIndex" @mouseenter="changeShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2">
            <div class="item" v-for="(c1,index) in categoryList" 
            :key="c1.categoryId" 
            @mouseenter="changeIndex(index)" 
            :class="{cur:currentIndex==index }"

            >
              <h3>
                <a @click="goToSearch1(c1)">{{c1.categoryName}}</a>
              </h3>
              <!-- 二级，三级分类 -->
              <div class="item-list clearfix" 
              :style="{display: currentIndex === index ? 'block':'none'}">
                <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId" >
                  <dl class="fore">
                    <dt>
                      <a @click="goToSearch2(c2)">{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a @click="goToSearch3(c3)">{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            
            </div>
          </div>
        </transition>
        
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
// 引入辅助函数
import {mapState} from 'vuex'
// 引入节流
import throttle from 'lodash/throttle'
export default {
  data(){
    return{
      currentIndex:-1,
      show:true
    }
  },
  name: "TypeNav",
  mounted(){
    // // 通知vuex发请求
    // this.$store.dispatch('categoryList')
    // 组件挂载完毕后，判断路径是否在home，是则显示，否则隐藏
    if(this.$route.path != '/home'){
      this.show = false
    }

  },
  computed:{
    ...mapState({
      // 获取home仓库中三级分类数据
      categoryList:(state) => {
        return state.home.categoryList
      }
    })
  },
  methods:{
    // 鼠标移入事件
    // 使用节流
    changeIndex :throttle(function(index){
      this.currentIndex = index
      // console.log(index);
    },30),
    // 鼠标移出事件
    leaveIndex(){
      this.currentIndex = -1
      if(this.$route.path != '/home'){
        this.show = false
      }
    },
    // 一级分类跳转
    goToSearch1(c1){
      // 新建跳转位置和query参数
      let location = {
        name:'search',
        query:{
          categoryName:c1.categoryName,
          category1Id:c1.categoryId
        }
      }
      // 判断是否有params值，有则带上
      if(this.$route.params){
        location.params = this.$route.params
      }
      // 跳转到搜索页
      this.$router.push(location)
    },
    // 二级分类跳转
    goToSearch2(c2){
      // 新建跳转位置和query参数
      let location = {
        name:'search',
        query:{
          categoryName:c2.categoryName,
          category2Id:c2.categoryId
        }
      }
      // 判断是否有params值，有则带上
      if(this.$route.params){
        location.params = this.$route.params
      }
      // 跳转到搜索页
      this.$router.push(location)
    },
    // 三级分类跳转
    goToSearch3(c3){
      // 新建跳转位置和query参数
      let location = {
        name:'search',
        query:{
          categoryName:c3.categoryName,
          category3Id:c3.categoryId
        }
      }
      // 判断是否有params值，有则带上
      if(this.$route.params){
        location.params = this.$route.params
      }
      // 跳转到搜索页
      this.$router.push(location)
    },
    // 鼠标移入全部商品显示typenav组件
    changeShow(){
      this.show = true
    },
  },


};
</script>

<style  lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }
    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }
    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 510px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

         
        }
      }
    }
    /* 过渡动画样式 */
    .sort-enter,.sort-leave-to{
      height:0
    }
    .sort-enter-active,.sort-leave-active{
      transition: all .2s;
    }
    .sort-enter-to,.sort-leave{
      height: 510px;
    }
    /* 过渡动画样式结束 */
  }
  .cur{
    background-color: skyblue;
  }
}
 
</style>
