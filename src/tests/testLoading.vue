<template>
  <div class="loading">
      <Loading v-if="isLoading"/>
      <button @click="isLoading = !isLoading">切换隐藏</button>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue"
export default {
components:{
    Loading,
},
data() {
  return {
    isLoading:true,
  };
},
};
</script>

<style scoped lang="less">
.loading{
  position:relative;
}

</style>