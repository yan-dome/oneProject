
import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/message","post",{
    code:0,
    msg:"",
    data:{
        id:"@guid",
        nickname:"@cname",
        content:"@cparagraph(1,10)",
        createDate:Date.now(),
        "avatar|1":[
            "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2796144188,439704386&fm=26&gp=0.jpg",
            "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2796144188,439704386&fm=26&gp=0.jpg",
            "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2796144188,439704386&fm=26&gp=0.jpg",
            "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2796144188,439704386&fm=26&gp=0.jpg",

        ],
    }
})

Mock.mock(/^\/api\/message\/?(\?.+)?$/,"get",function(options){
    const query = qs.parse(options.url);
   
    return Mock.mock({
        code:0,
        msg:"",
        data:{
            total:50,
            [`rows|${query.limit || 10 }`] : [
                {
                    id:"@guid",
                    nickname:"@cname",
                    content:"@cparagraph(1,10)",
                    createDate:Date.now(),
                    "avatar|1":[
                        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2796144188,439704386&fm=26&gp=0.jpg",
                        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2796144188,439704386&fm=26&gp=0.jpg",
                        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2796144188,439704386&fm=26&gp=0.jpg",
                        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2796144188,439704386&fm=26&gp=0.jpg",
            
                    ],
                }
            ]
        }
    })
});