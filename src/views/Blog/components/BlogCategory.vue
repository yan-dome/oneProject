<template>
 <div class="blog-category-container">
     <h2>文章分类</h2>
     <RightList @select="handleSelect" :list="list" v-loading="isLoading" />
 </div>
</template>

<script>
import RightList from "./RightList";
import fetchData from "@/mixins/fetchData.js";
import {getBlogsType} from "@/api/blog.js"
export default {
    mixins:[fetchData([])],
    components:{
        RightList,
    },
    computed:{
        
        categoryId(){
            return +this.$route.params.categoryId || -1;
        },
        limit(){
             return +this.$route.query.limit || 10;
        },
        list(){
            const totalArticleCount = this.data.reduce((a,b)=> a + b.articleCount,0);
            
            const result = [
                {name:"全部", id:-1,articleCount:totalArticleCount},...this.data
            ];
            return result.map((it) => ({
                ...it,
                isSelect:it.id === this.categoryId,
                aside:`${it.articleCount}篇`,
            }));
       }
    },
    methods:{
        async fetchData(){
            return await getBlogsType()
        },
        handleSelect(item){
               const query = {
                page:1,
                limit:this.limit
            }
           if(item.id === -1) {
               //当前没有分类  
               //article?page=${newPage}&limit=${this.routeInfo.limit}
                this.$router.push({
                    name:"Blog",
                    query,
                })
           }else{
               //article/cate/${this.routeInfo.categoryId}?page=page=${newPage}&limit=${this.routeInfo.limit}
               this.$router.push({
                   name:"CategoryBlog",
                   query,
                   params:{
                       categoryId:item.id,
                   }
               });
           }
        },
        
        
    }
};
</script>

<style scoped lang="less">
.blog-category-container{
    width:300px;
    box-sizing:border-box;
    padding:20px;
    position:relative;
    height:100%;
    overflow-y:auto;
    h2 {
        font-weight: 700;
        letter-spacing: 2px;
        font-size:1em;
        margin:0;
    }
}
</style>