<template>
  <i class="iconfont iconfont-container" :class="fontClass" ></i>
</template>

<script>
const classMap = {
    home:"iconzhuye",
    success:"iconzhengque1",
    error:"iconcuowu",
    close:"iconguanbi",
    warn:"iconjinggao",
    info:"iconinfo",
    blog:"iconxieboke",
    code:"iconcode",
    about:"iconset_about_hov",
    weixin:"iconweixin1",
    email:"iconemail",
    github:"icongithub",
    qq:"iconqq",
    arrowDown:"iconico_open",
    arrowUp:"iconico_back",
    empty:"iconempty",
    chat:"iconliuyan"
};
export const types = Object.keys(classMap);
export default {
    
    props:{
        //属性名字
        type:{
            //属性类型
            type:String,
            require: true

        },
    },
    computed:{
        //图标类样式
      fontClass() {
          return classMap[this.type];
      },
    },
}
</script>

<style scoped>
@import"//at.alicdn.com/t/font_2512912_p8qjrvux2md.css";
.iconfont{
    color:inherit;
    font-size: inherit;
}
</style>