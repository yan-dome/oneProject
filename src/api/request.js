
 import axios from "axios";
 import showMessage from "../utils/showMessage";
// 创建一个axios实例   会先运行遇到错误抛出错误相当于一个拦截器
const ins = axios.create();
ins.interceptors.response.use(function(resp){
    
    if(resp.data.code !== 0) {
        showMessage({
            content:resp.data.msg,
            type:"error",
            duration:1500,
        })
        return null;
    }
    return resp.data.data;
})

export default ins;