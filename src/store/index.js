
import Vuex from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";

if(!window.Vuex) {
Vue.use(Vuex);

}

export default new Vuex.Store({
    modules:{
        banner,
        setting,
        about,
        project,
    },
    strict:true,  //开启严格模式 
});
