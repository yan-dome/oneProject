<template>
  <div class="Layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot name="main"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.Layout-container {
  width: 100%;
  height: 100%;
  display: flex;
}
.left,
.right {
  flex: 0 0 auto;
  height: 100%;
  overflow: hidden;
}
.main {
  flex: 1 1 auto;
  overflow: hidden;
  width: 100%;
}
</style>