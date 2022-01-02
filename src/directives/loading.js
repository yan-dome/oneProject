
//到处指令的配置对象
// export default {
//     bind(el, binding){//只调用一次 指令第一次绑定元素时调用。在这里可以进行一次性的初始化设置
//         console.log("bind",el);
//         //创建一个img元素 放到el元素内部
//     },

//     update(el,binding) { // 组件的VNode 更新调用
//         console.log("update",el);
//         // 根据bingding.value的值 决定创建或者删除img元素
//     },
// }
import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
//判断el中是否存在loading效果的img元素
function getLoadingImage(el) {
    return el.querySelector("img[data-role=loading]");
}
function createLoadingImg() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}
export default function (el, binding) {
    //根据binding.value的值  创建和删除Img的元素
    const curImg = getLoadingImage(el);
    if (binding.value) {


        if (!curImg) {
            const img = createLoadingImg();
            el.appendChild(img);

        }

    } else {
        if (curImg) {

            curImg.remove()
        }
    }

}
