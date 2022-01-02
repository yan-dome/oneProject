
import getComponent from "./getComponentRootDom";
import Icon from "@/components/icon.vue";
import styles from "./message.module.less";
/**
 * 弹出消息
 * @param {*} content  消息内容
 * @param {*} type  消息类型 info  error success warn
 * @param {*} duartion   多久后消失 0 为不消失
 * @param {*} container  容器，消息会显示到该容器的正中，如果不穿则显示页面正中
 */
export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "success";
    const duartion = options.duartion || 2000;
    const container = options.container || document.body;

    //创建元素消息
    const div = document.createElement('div');
    const iconDom = getComponent(Icon, {
        type,
    });

    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;

    //设置样式
    const typeClassName = styles[`message-${type}`];
    div.className = ` ${styles.message} ${typeClassName}`;
    
    //是否传入了container  容器  传入了容器才设置
   if(options.container) {
    //容器的position是否改动过
    if (getComputedStyle(container).position === "static") {
        container.style.position = "relative";
    }
   }
        
    
    container.appendChild(div);
    //浏览器强行渲染一次
    div.clientHeight; //导致reflow

    //回归正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`;

    //等一段时间 消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
        div.addEventListener("transitionend", function () {
            div.remove();
            //运行回调函数
            options.callback && options.callback();
        }, { once: true })
    }, duartion);
}