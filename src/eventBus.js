
import Vue from "vue";
const app = new Vue({});
/**
 * 事件名:mainScroll
 * 含义:主区域滚动条位置变化后触发
 * 参数
 * -滚动dom元素  如果是undefined 则表示Dom 元素已经不存在
 * 
 * 事件名:setMainScroll    
 * 含义：当需要设置主区域滚动条位置的时候触发
 * 参数: 滚动高度
 */
Vue.prototype.$Bus = app;
//导出事件总线
export default app;
