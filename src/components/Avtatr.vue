<template>
  <img
    class="avtatr-container"
    :src="url"
    alt="我是头像"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default:100
    },
  },
};
</script>

<style scoped>
.avtatr-container {
  display: block;
  border-radius: 50%;
  
  border: 1px solid;
}
</style>