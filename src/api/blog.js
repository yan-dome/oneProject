

import request from "./request";
/**
 * 获取博客数据
 */
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
 
  return await  request.get("/api/blog",{
       params:{
        page,
        limit,
        categoryId,
       }
    });
}
/**
 * 分类
 */
 export async function getBlogsType() {
    return await  request.get("/api/blogtype");
  }


  //文章详情页
  export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`) 
  }
  //提交评论
  export async function postComment(commentInfo) {
    return await request.post(`/api/comment`,commentInfo)
  }
  // 分页获取评论
  export async function getComments(blogId,page=1,limit=10) {
    return await request.get(`/api/comment`,{
      //地址栏里的
      params:{
        blogId,
        page,
        limit,
      }
    });
  }