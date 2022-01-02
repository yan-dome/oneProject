
//导入事件总线
import eventBus from "@/eventBus.js"
//导入防抖  防止触发太快
import { debounce } from "@/utils"
import defaultGif from "@/assets/default.gif";
//设置一个数组  那些是需要加载图片的
let imgs = [];
//
function setImage(img) {
    img.dom.src = defaultGif; //先暂时使用默认图片


    // //没有处理过的话开始处理图片
    // console.log("已处理", img.src);
    // imgs = imgs.filter(i => i !== img);
    //该图片是否在视口范围内
    const rect = img.dom.getBoundingClientRect();
    const clientHeight = document.documentElement.clientHeight;
    const height = rect.height || 200;
    if (rect.top >= -height && rect.top <= clientHeight) {
        //在视口范围内
        const tempImg = new Image();
        tempImg.onload = function () {
            //当真实图片加载完成之后
            img.dom.src = img.src;
        };
        tempImg.src = img.src;
        //移除掉
        imgs = imgs.filter(i => i !== img);
    }


};
//希望调用该函数就可以设置那些合适的图片
function setImages() {

    for (const img of imgs) {
        //处理该图片
        setImage(img);

    }
}

function handleScroll() {
    setImages();
};

//事件总线监听
eventBus.$on("mainScroll", debounce(handleScroll, 500));

//自定义指令
export default {
    //inserted时父节点存在  bind父节点不存在
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value,

        };
        imgs.push(img);
        //立即处理
        setImage(img);
    },
    unbind(el) {
        imgs = imgs.filter(img => img.dom !== el)
    },
};