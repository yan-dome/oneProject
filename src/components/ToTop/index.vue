<template>
    <div @click="handleClick" v-show="show" class="to-top-container">
        Top
    </div>
</template>

<script>
    export default {
        
        data() {
            return {
                show: false,
            };
        },
        
        created() {
            this.$Bus.$on("mainScroll",this.handleScoll);
        },
        beforeDestroy() {
            this.$Bus.$off("mainScroll",this.handleScoll);

        },
        methods:{
            handleScoll(dom){
                if(!dom){
                 this.show = false;
                 return;
                }
               this.show = dom.scrollTop >= 1000;
               
            },
            handleClick(){
                //回到顶部
               this.$Bus.$emit("setMainScroll",0)
            },
        },
    };
</script>

<style scoped lang="less">
    @import "~@/styles/var.less";

    .to-top-container {
        background-color: @primary;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: fixed;
        z-index: 99;
        right: 50px;
        bottom: 50px;
        cursor: pointer;
        line-height: 50px;
        color: #fff;
        text-align: center;
    }
</style>