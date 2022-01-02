<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }"
        >{{ item.name }}
      </span>
      <span
        v-if="item.aside"
        @click="handleClick(item)"
        class="aside"
        :class="{ active: item.isSelect }"
      >
        {{ item.aside }}
      </span>
      <!-- 递归组件 -->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  //递归组件所必须要的name名
  name: "RightList",
  props: {
    //这是 [{name:"xxx" ,isSelect:true, children:[{name:"yyy", isSelect:false}]}]   isSelect是否选中    children 是否有子项
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    //自己无法处理  抛出去让父级处理
    handleClick(item) {
      if(!item.isSelect) {
      this.$emit("select", item);

      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    cursor: pointer;
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    .active {
      color: @warn;
      font-weight: 700;
    }
  }
}
.aside {
  font-size: 14px;
  margin-left: 1em;
  color: @gray;
  cursor: pointer;
}
</style>