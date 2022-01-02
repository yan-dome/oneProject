<template>
  <div class="SiteAside-container"   >
  <div class="avtatr-container">
     <Avtatr :url="  data.avatar"   v-if="data"/>   
    </div>  
    <h1 class="title"  v-if="data"> {{  data.siteTitle }}</h1>   
     <Menu />
     <Contact  v-if="data" />
<p class="jing" v-if="data">{{   data.icp }}</p>
  </div>
    
</template>

<script>
import Avtatr from "./Avtatr";
import Contact from "./Contact";
import Menu from "./Menu";
import { mapState } from "vuex"

export default {
  components:{
    Avtatr,//头像
    Contact, //
    Menu,
    
  },
  //仓库辅助函数
  computed:
    mapState("setting",["data"])
  ,
}
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/var.less";
  .SiteAside-container{
    width:100%;
    height:100%;
    background: @dark;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    
  }
  .avtatr-container{
    margin:0 auto;
    }
 .jing{
   text-align: center;
   font-size: 12px;
 }
 .title{
   font-size: 1.5rem;
   text-align: center;
   color: #fff;
   font-weight: 700;
 }
</style>