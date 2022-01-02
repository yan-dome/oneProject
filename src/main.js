import Vue from 'vue'
import "./mock"
import App from './App.vue'
import "./styles/global.less"
import "./styles/var.less"
import router from "./router"
import "./eventBus"
// import styles from "./styles/message.module.less"
import store from "./store"

//全局数据 一开始触发
store.dispatch("setting/fetchSetting")

Vue.config.productionTip = false
// 测试一下纯Dom操作
// const div = document.createElement("div");
// div.className=styles.message;
// div.innerText="我是纯粹来测试的";
// document.body.appendChild(div);

// 得到组件生成的根Dom
// function getComponentRootDom(comp,props){
//   const vm = new Vue({
//     render:(h) => h(comp,{props}),
//   });
//   vm.$mount();
//   return vm.$el;
// }
// import Icon from "./components/icon.vue"
// var dom = getComponentRootDom(Icon,{ type:"Home" });
// console.log(dom);

// 向实例注入成员

// Vue.prototype.$sayHello = function () {
//     console.log("Hello!!!");
// }
//  var vm = new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
// vm.$sayHello();
// import showMessage from "./utils/showMessage";
// window.showMessage= showMessage;
// showMessage("ansnn",'warn')

import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;
//注册全局指令 
import vLoading from "./directives/loading"
import vLayz from "./directives/layz"
Vue.directive("loading", vLoading);
Vue.directive("layz", vLayz);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
// import * as blog from "./api/blog";
// blog.getBlogsType().then((r) => { console.log("博客分类", r); });
// blog.getBlogs(2,20,3).then((r)=>{console.log("博客数据",r);});
//测试
import * as blogApi from "./api/blog";
// blogApi.getBlog("123123").then((r)=>{console.log("文章详情页响应结果",r)});
// blogApi.postComment({
//   nickname:"呢城",
//   ccontent:"评论内容,纯文本",
//   blogId: "测试id"  //评论博客的ID
// }).then((r) => {
//   console.log("评论响应结果",r)
// });
// blogApi.getComments("123123123").then((r)=>{console.log("评论详情页",r)})
// import { getSetting } from "./api/setting";
// getSetting().then((resp)=>{
//   console.log("模拟数据",resp);
// })