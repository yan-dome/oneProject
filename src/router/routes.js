
// 路由导航  所对应渲染的插件
// import Home from "@/views/Home";
// import About from "@/views/About";
// import Blog from "@/views/Blog";
// import Message from "@/views/Message";
// import Project from "@/views/Project";
// import BlogDetail from "@/views/Blog/Detail";


// 组件分包  是个函数
// component: ()=>import( /*这是动态引入   webpackChunName:home**/"@/views/Home")

//进度条
import "nprogress/nprogress.css"
import { start , done , configure} from "nprogress"

import NotFound from "@/views/NotFound.vue"
 
configure({
  trickleSpeed:10,
  showSpinner:false,
})
window.start = start;
window.done = done;

// 辅助函数 
function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function getPageComponent(pageCompResolver) {
  return async () => {
    start();
    if (process.env.NODE_ENV === "develoment") {
      await delay(4000);
    }
    const comp = await pageCompResolver();
    done();
    return comp;
  }
}

export default
  //导出 路由的匹配路径
  [
    {
      name: "Home", path: "/", component: getPageComponent(() => import(/*这是动态引入*/"@/views/Home")), meta: {
        title: "主页",
      }
    },
    {
      name: "About", path: "/About", component:getPageComponent( () => import("@/views/About")), meta: {
        title: "关于我",
      }
    },
    {
      name: "Blog", path: "/article", component:getPageComponent( () => import("@/views/Blog")), meta: {
        title: "博客",
      }
    },
    //新增的文章路由规则  动态获取详细文章的内容
    {
      name: "CategoryBlog", path: "/article/cate/:categoryId", component: getPageComponent(() => import("@/views/Blog")), meta: {
        title: "文章",
      }
    },
    {
      name: "BlogDetail", path: "/article/:id", component:getPageComponent( () => import("@/views/Blog/Detail")), meta: {
        title: "文章详情",
      }
    },
    {
      name: "Message", path: "/Message", component: getPageComponent(() => import("@/views/Message")), meta: {
        title: "留言板",
      }
    },
    {
      name: "Project", path: "/Project", component:getPageComponent( () => import("@/views/Project")), meta: {
        title: "项目和效果",
      }
    },
    {
      name:"NotFound",path:"*",component:NotFound,title:"页面丢失"
    }
  ]
