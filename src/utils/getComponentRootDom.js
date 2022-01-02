
//得到组件生成的根Dom 
import Vue from "vue";

export default function getComponent(comp,props) {
    const vm = new Vue({
        render: (h) => h(comp,{ props }),
    });
    vm.$mount();
    return vm.$el;
};