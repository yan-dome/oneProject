<template>
  <Layout>
    <template #main>
      <div ref="mainContainer" class="main-container" v-loading="isLoading" >
        <BlogDetatil :blog="data" v-if="data" />
        <BlogComment v-if="!isLoading" />
      </div>
    </template>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogToc :toc="data.toc" v-if="data.toc" />
      </div>
    </template>
  
  </Layout>
 
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetatil from "./components/BlogDetail";
import BlogToc from "./components/BlogToc";
import BlogComment from "./components/BlogComment";
import mainScroll from "@/mixins/mainScroll.js"
import {title} from "@/utils"


export default {
  //混入 
  mixins: [fetchData({}),mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetatil,
    BlogToc,
    BlogComment,
    
  },
  methods: {
    async fetchData() {
    let resp =  await getBlog(this.$route.params.id);
     
     if(!resp){
       //文章不存在
       this.$router.push("/404")
       return ;
     }

    title.setRouterTitle(resp.title);
    return resp;
    },
    // handlScroll(){
    //   //事件总线
    //   this.$Bus.$emit("mainScroll",this.$refs.mainContainer)
      
    // },
    // //触发滚动高度
    // handlSetMainScroll(scrollTop){
    //  this.$refs.mainContainer.scrollTop = scrollTop; 
    // },
  },
  
  // mounted(){
  //   this.$refs.mainContainer.addEventListener("scroll",this.handlScroll);
  //    this.$Bus.$on("setMainScroll",this.handlSetMainScroll);
  // },
  // beforeDestroy(){
  //   this.$Bus.$emit("mainScroll");
  //    this.$Bus.$off("setMainScroll",this.handlSetMainScroll);
  //   this.$refs.mainContainer.removeEventListener("scroll",this.handlScroll);

  // },
  updated(){
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.main-container {
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  //平滑滚动
  scroll-behavior: smooth;
}
.right-container{
  width:300px;
  height:100%;
  overflow-y:scroll;
  box-sizing: border-box;
  position:relative;
}
</style>