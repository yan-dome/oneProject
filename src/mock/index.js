
//专门导入mock.js  便于测试
import  Mock  from "mockjs";
import "./banner";
import "./blog.js";
import "./setting";
import "./about";
import "./project";
import "./message";

//模拟延迟
Mock.setup({
    timeout:"1000-3000"
});