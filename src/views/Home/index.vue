<template>
  <div v-loading="loading"  class="home-container" ref="container" @wheel="handleWheel">
    <ul class="carousel-container" :style="{
      marginTop
      }" @transitionend="handleTransitionEnd">
      <li v-for="item in data" :key="item.id">
        <Carouselitem  :carousel="item"/>
      </li>
    </ul>
    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">
      <Icon  type="arrowUp"/>
    </div>
    <div v-show="index < data.length - 1" @click="switchTo(index + 1)" class="icon icon-down">
      <Icon  type="arrowDown"/>
    </div>
    <ul class="indicator">
      <li :class="{
        active:i === index,
      }" @click="switchTo(i)" v-for="(item,i) in data" :key="item.id"></li>
    </ul>
    <!-- <Loading  v-if="isLoading"/> -->
  </div>
 
</template>

<script>
// import{getBanners} from "@/api/banner";  仓库替代
import { mapState } from "vuex"
import Carouselitem from "./Carouselitem";
import Icon from "@/components/icon";
import Loading from "@/components/Loading";
// import fetchData from "@/mixins/fetchData";  利用仓库替代
export default {
  //组件混入  提取远程获取数据的公共代码
  // mixins:[fetchData([])],
 components:{
   
   Carouselitem,
   Icon,
   Loading,
 },
 data() {
  
   return {
    //  banners:[],
     index:0,  //当前显示的是第几张轮播图
     containerHeight:0,  //整个容器的高度
     switchIng:false, //是否正在翻页
    //  isLoading:true,  //是否正在加载中  loding
   };
 },
//  async created() {
//    this.banners = await getBanners();
//    this.isLoading = false;
//  },
 
 //首页加载的时候触发
  created(){
    this.$store.dispatch("banner/fetchBanner");
  },
 
 mounted(){
   //容器的高度
   this.containerHeight = this.$refs.container.clientHeight;
   //更改页面重新计算高度
   window.addEventListener("resize",this.handleResize)
 },
 destroyed(){
   //为了不影响其他的 移除掉该函数
   window.removeEventListener("resize",this.handleResize)
 },
 computed:{
   marginTop(){
     // 页面的高度  为了计算第几个页面
    return -this.index * this.containerHeight + "px";
   },
   //仓库的辅助函数
    ...mapState("banner",["loading","data"])
 },
 methods:{
   //公共代码需要的方法
   // 仓库替代
  //  async fetchData() {
  //    return await getBanners();
  //  },
   //切换轮播图
   switchTo(i){
    this.index = i;
   },
   handleWheel(e){
     //防止 正在切换的时候 重复运行
     if(this.switchIng) {
       return;
     }
     
     if(e.deltaY > 1 && this.index < this.data.length -1 ) {
       //下一页
       this.switchIng = true;
       
       this.index++;
       
     } else if( e.deltaY < 1 && this.index > 0)  {
       //上一页
       this.switchIng = true;
       this.index --;
       
     
       
     } 
   },
    handleTransitionEnd() {
      //过渡完成之后操作 
     this.switchIng = false;
   },
   handleResize() {
     //重新渲染一次高度变化后的页面
     
      this.containerHeight = this.$refs.container.clientHeight;
   }
   
 }

};

</script>

<style scoped lang="less">
@import "~@/styles/position.less";
@import "~@/styles/var.less";
.home-container{
  width:100%;
  height:100%;
  position:relative;
  overflow: hidden;
   //测试
  //  width:400px;
  //  height:300px;
  //  overflow: visible;
  //  border: 2px solid red;
  //  margin:50px auto;
  //  box-sizing: border-box;
  //  position:relative;
 
  ul{
    margin:0;
    list-style: none;
    padding: 0;
  }
   .carousel-container{
    width:100%;
    height:100%;
    transition: .5s;
    li{
      width:100%;
      height:100%;
    }
  }
  .icon {
    @gap:20px;
    
    
    .self-center();
    font-size:30px;
    color:#fff;
    cursor:pointer;
    transform: translateX(-50%);
    
    &.icon-up{
      top:@gap;
      animation: jump-up 2s infinite;
      transition: 2s;
    }
    &.icon-down{
      top:auto;
      bottom: @gap;
      animation: jump-down 2s infinite;

    }
    @jump:5px;
    @keyframes jump-up {
      
      0%{
    transform: translate(-50%,@jump);

      }
      50%{
        transform: translate(-50%,-@jump);
      }
      100%{
    transform: translate(-50%,@jump);

      }
    }
     @keyframes jump-down {
      
      0%{
    transform: translate(-50%,-@jump);

      }
      50%{
        transform: translate(-50%,@jump);
      }
      100%{
    transform: translate(-50%,-@jump);

      }
    }
  }
  .indicator{
    .self-center();
   transform: translateY(-50%);
   left:auto;
   right:20px;
   li{
     width:10px;
     height:10px;
     
     border: 1px solid #fff;
     border-radius: 50%;
     cursor:pointer;
     box-sizing: border-box;
     margin-bottom: 10px;
 &.active{
     background:#fff;
   }
   }
  
  }
}
</style>