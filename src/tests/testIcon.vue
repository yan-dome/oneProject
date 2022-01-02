<template>
  <div id="App">
      <div v-for="n in types" :key= "n"  class="com" >
 <Icon :type= n />
      <label > {{ n }}</label>
      </div>
     
     
      
  </div>
</template>

<script>
import Icon ,{ types } from "../components/icon";

export default {
  
    components:{
        Icon,
        
    },
    data() {
      return {
        types,
      }
    }
}
</script>

<style scoped>

    .iconfont  {
  display: block;
  font-size: 50px;
  color:#000;
  
}
.com {
  display: inline-block;
  padding: 10px;
  text-align: center;
}
</style>