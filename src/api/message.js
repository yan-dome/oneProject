
import request from "./request";

//得到分页的消息
export async function getMessage(page=1,limit=10){
    return await request.get("/api/message",{
        params:{
            page,
            limit,
        },
    });
}
//提交一个消息
export async function postMessage(msgInfo){
    return await request.post("/api/message",msgInfo);
}
