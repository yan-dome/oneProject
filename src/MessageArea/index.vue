<template>
  <div class="message-area-container">
    <DataForm  v-on="$listeners" />
    <h3>
      {{ title }}
      <span> {{ subTitle }}</span>
    </h3>
    <DataList :list="list"/>
    <div class="loading" v-loading="isListloading"></div>
  </div>
</template>

<script>
import DataList from "./DataList";
import DataForm from "./DataForm";
export default {
  props: {
    //列表标题
    title: {
      type: String,
      default: "",
    },
    //列表副标题
    subTitle: {
      type: String,
      default: "",
    },
    //列表数据
    list: {
      type: Array,
      default: () => [],
    },
    //列表是否正在加载中
    isListloading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataList,
    DataForm,
  },
  
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>