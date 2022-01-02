
//全局设置
import { getSetting } from "../api/setting";
import {title} from "../utils";
export default {
    namespaced: true, //命名空间
    state: {
        loading: false,
        data: null,
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        async fetchSetting(ctx) {
            ctx.commit("setLoading", true);
            const resp = await getSetting();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
            if(resp.favicon){
               // <link rel="shortcut icon " type="images/x-icon" href="http://www.jd.com/favicon.ico"></link>
                let link = document.querySelector("link[rel='shortcut icon']");
                if(link){
                    return;
                }
                link = document.createElement("link");
                link.rel = "shortcut icon";
                link.type = "images/x-icon";
                link.href = resp.favicon;
                document.querySelector("head").appendChild(link);
                
            };
            if(resp.siteTitle){
                title.setSitetitle(resp.siteTitle);
            }
        },
    },
};