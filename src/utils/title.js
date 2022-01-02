
//专门控制网站标题的

let setroutertitle = "", setSitetitle = "";

function setTitle(){
    if(!setroutertitle && !setSitetitle) {
        document.title = "loading";
    } else if (setroutertitle && !setSitetitle){
        document.title = setroutertitle;
    } else  if (!setroutertitle && setSitetitle){
        document.title = setSitetitle;
    } else {
       document.title = `${setroutertitle} - ${setSitetitle}` ;
    }
}
export default {
    //设置路由标题
    setRouterTitle(title){
    
        setroutertitle = title;
        setTitle()
    },
    //设置网站标题
    setSitetitle(title){
     
        setSitetitle = title;
        setTitle()
    },
}