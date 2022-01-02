<template>
  <div ref="mainScroll" class="message-container">
    <MessageArea title="留言板" :subTitle="`(${data.total})`" :isListloading="isLoading"
    :list="data.rows"
    @submit="handleSubmit"
     />
  </div>
</template>

<script>
import MessageArea from "@/MessageArea"
import fetchData from "@/mixins/fetchData"
import * as message from "@/api/message";
import NmainScroll from "@/mixins/mainScroll"

export default {
  mixins:[fetchData({total:0,rows:[]} ),NmainScroll("mainScroll")],
  data(){
    return {
       page:1,
       limit:10,
    }
  },
components:{
  MessageArea,
},
 created(){
   this.$Bus.$on("mainScroll",this.handleScoll);
  },
  beforeDestroy() {
    this.$Bus.$off("mainScroll",this.handleScoll);

  },
  computed:{
     //有没有更多的数据
    hasMore(){
      return this.data.rows.length < this.data.total;
    }
  },
methods:{
  async fetchData(){
  
   return  message.getMessage(this.page,this.limit);
  },
  async handleSubmit(data,callback){
  const query =  await message.postMessage(data);
   
   
    callback("留言成功");
    this.data.rows.unshift(query);
    this.data.total++;
  },
  async handleScoll(dom){
     
     if(this.isLoading || !dom) {
       //表示目前正在加载
       return;
     }

     //定一个可接受的范围，在这个范围内都算达到了底部
     const range = 100;
     const dec = Math.abs((dom.scrollTop + dom.clientHeight) - dom.scrollHeight);
     if(dec<= range){
       
       this.fetchMore();
     }
     
   },
    //加载下一页
    async fetchMore(){
      if(!this.hasMore){
        //没有更多了
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp  = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
}
}
</script>

<style scoped lang="less">
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>