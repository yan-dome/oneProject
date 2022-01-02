
import { getBanners } from "../api/banner";
// 首页标语
export default {
    namespaced:true, //命名空间
    state:{
        loading:false,
        data:[],
        
    },
    //改变数据
    mutations:{
        setLoading(state,payload) {
          state.loading = payload;
        },
        setDate(state,payload){
            state.data = payload;
        },
    },
    //异步改变
    actions:{
        
      async  fetchBanner(ctx){
          if(ctx.state.data.length){
              return;
          }
          ctx.commit("setLoading",true)
        const resp = await getBanners();
        ctx.commit("setDate",resp);
        ctx.commit("setLoading",false);
        }
    }
};