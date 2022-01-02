
<template>
  <div class="imagesL">
     <ImagesLoader 
        url="http://mdrs.yuanjin.tech/img/20201031141350.jpg"
        placeholder="http://mdrs.yuanjin.tech/img/20201031141507.jpg"
        :duration=500
     @load="handleLoader"
     
     />
    
  </div>
</template>

<script>
import ImagesLoader from "@/components/imagesLoader.vue"
export default {
    components:{
        ImagesLoader,
    },
    methods:{
        handleLoader() {
            console.log("组件运行了,图片加载完成了");
        }
    }
}
</script>

<style scoped>
    .imagesL{
        width: 500px;
        height: 400px;
        border: 1px solid;
    }
</style>