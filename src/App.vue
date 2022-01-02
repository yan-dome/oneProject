<template>
  <div class="App-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #main>
        
          <RouterView />
      
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ToTop from "./components/ToTop";

export default {
  components: {
    Layout,
    ToTop,
    SiteAside,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/position.less";
.App-container {
  .self-fill(fixed);
  background: #ddd;
}
.aside {
  width: 250px;
  height: 100%;
}
</style>