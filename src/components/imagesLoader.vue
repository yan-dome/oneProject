<template>
  <div class="imagesLoader-container">
      <img v-if="!everythingDone" class="placeholders" :src="placeholder">
      <img @load="handleLoad" class="origin" :src="url" :style=" {opacity:originOpactity,transition:`${duration}ms`} ">
  </div>
</template>

<script>
export default {
    
    props:{
        //类型 种类
        url:{
            //原始图片路径  
           
                type:String,
                require:true,
                default:"",
          
         
        },
        placeholder:{
               //图片加载前的占位图片
          
                type:String,
                require:true,
                default:"",
           
          
        },
        duration:{
              // 图片加载完成后，切换到原始图的毫秒数
            
                type:Number,
                require:false,
                default:500,
           
        },
    },
    //需要的数据
    data(){
        return {
            originLoaded:false, //原图是否加载完成
            everythingDone:false, //是否一切都完成了
        }
    },
    //计算属性
    computed:{
        // 判断origin的optity值
        originOpactity(){
            
            return this.originLoaded ? 1 : 0;
        }
    },
    //抛出事件
    methods:{
        handleLoad(){
            this.originLoaded = true;
            // console.log("原图加载完成");
            //everythingDone 根据返回值    需要删除占位图片
        setTimeout(()=>{
            this.everythingDone = true;
            this.$emit("load")
        },this.duration);
        },
    },

};
</script>

<style scoped lang="less">
@import "~@/styles/position.less";
    .imagesLoader-container {
        position:relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        img {
           .self-fill(absolute);
           object-fit: cover;
           
           
            &.placeholders {
                
                filter: blur(2vw);
            }
           
        }
    }
</style>