<template>
  <div class="Empty">
      <Empty/>
  </div>
</template>

<script>
import Empty from "../components/Empty"
export default {
    components:{
        Empty,
        }
}
</script>

<style scoped>
.Empty {
    position: relative;
    margin: 0 auto;
    width: 400px;
    height: 400px;
    border: 1px solid;
    
}
</style>