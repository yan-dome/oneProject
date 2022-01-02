<template>
  <div class="Empty-container">
      <Icon type="empty" />
      <p>
          {{ text }}
      </p>
  </div>
</template>

<script>
import Icon from "./icon"
export default {
    components:{
       Icon, 
    },
    props:{

        text:{
            type:String,
            require:false,
            default:"无数据",
        }
    },
    
};
</script>

<style scoped lang="less">
@import "~@/styles/position.less";
@import "~@/styles/var.less";
.Empty-container{
    .self-center();
    color:@lightWords;
    text-align: center;
}
.iconfont {
    font-size: 72px;
}

</style>