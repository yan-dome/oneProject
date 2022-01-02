
import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
import {title } from "../utils";

if (!window.VueRouter) {
Vue.use(VueRouter); // 使用一个vue插件

}
// 构造一个实例路由对象
 const router = new VueRouter({
  //配置  路由对象
  routes , // 匹配路由的规则
  mode:"history",  // 默认值是hash
});


//通过路由设置网站标题
router.afterEach((to,form)=>{

title.setRouterTitle(to.meta.title);
});
// 导出路由对象给 main 使用
export default router;