<template>
  <div class="m">
    <Menu
    
    />
  </div>
</template>

<script>
import Menu from "../components/Menu";
import "@/styles/global.less"
export default {
    components:{
        Menu,
    }
}
</script>

<style scoped >
    .m {
        width: 250px;
        height: 300px;
        border: 1px solid;
        background-color: #000;
    }
</style>