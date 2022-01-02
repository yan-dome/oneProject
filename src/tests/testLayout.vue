<template>
  <div class="test">
    <Layout>
      <template #left>
        <div class="left">我是左边栏</div>
      </template>
      <template #main>
        <div class="main">我是中间dsfsf我是中间dsfsf我是中间dsfsf我是中间dsfsf我是中间dsfsf我是中间dsfsf我是中间dsfsf我是中间dsfsf我是中间dsfsf</div>
      </template>
      <template #right>
        <div class="right">我是右边栏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.test {
  width: 70%;
  height:500px;
  border: 1px solid;
  margin: 0 auto;
  white-space: nowrap;
}
.left {
  width: 200px;
  height: 100%;
  background: red;
}
.main {
  width: 100%;
  height: 100%;
  background: pink;
}
.right {
  width: 150px;
  height: 100%;
  background: blue;
}
</style>