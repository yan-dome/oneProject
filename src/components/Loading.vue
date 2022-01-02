<template>
  <img class="loading-container" :src="loadingUrl" alt="">
</template>

<script>
import loadingUrl from "@/assets/loading.svg"
export default {
data() {
    return {
        loadingUrl,
    }
}
}
</script>

<style scoped lang="less">
@import "~@/styles/position.less";
.loading-container{
    .self-center();
}

</style>