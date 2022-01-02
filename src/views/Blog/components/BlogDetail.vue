<template>
 <div class="blog-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside" v-if="blog.category" >
      <span>日期:{{ formatDate(blog.createDate) }}</span>
      <span>浏览量:{{ blog.scanNumber }}</span>
     <span><a href="#data-form-container">评论量:{{ blog.commentNumber }}</a></span> 
     <span><router-link :to="{
       name:`CategoryBlog`,
       params:{
         categoryId: blog.category.id
       }
     }"  >{{ blog.category.name }}</router-link></span> 
    </div>
    <div class="markdown-body" v-html=" blog.htmlContent">
     
    </div>
 </div>
</template>

<script>

import formatDate from "@/utils/formatDate";
import  "@/styles/markdown.css";
import   "highlight.js/styles/github.css";
export default {
props:{
  blog:{
    type:Object,
    required:true,
    
  },
  
},
methods:{
  formatDate,
}
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

 .aside{
    font-size:12px;
    color:@gray;
    span,a{
       margin-right:15px;
       
    }
    
  }
  .markdown-body{
  margin:1em 0;
}
</style>