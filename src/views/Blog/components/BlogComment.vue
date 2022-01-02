<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListloading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/MessageArea/";
import fetchData from "@/mixins/fetchData";
import { getComments, postComment } from "@/api/blog.js";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
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
  methods: {
   async handleScoll(dom){
     
     if(this.isLoading || !dom) {
       //表示目前正在加载
       return;
     }

     //定一个可接受的范围，在这个范围内都算达到了底部
     const range = 100;
     const dec = Math.abs((dom.scrollTop + dom.clientHeight) - dom.scrollHeight);
     if(dec<= range){
       console.log("到达了底部");
       this.fetchMore();
     }
     
   },
    //获取远程数据
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
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
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功"); //告诉子组件处理完成
    },
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>