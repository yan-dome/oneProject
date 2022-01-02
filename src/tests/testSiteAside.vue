<template>
  <div class="wrap">
      <SiteAside />
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside"
export default {
    components:{
        SiteAside,
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
    .wrap{
      width:300px;
      height:600px;  
    margin: 0 auto;
       
       
    }
</style>