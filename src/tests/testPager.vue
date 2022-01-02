<template>
  <Pager 
    :total="total" :current="current" @pagechange="handlePageChange"
     />
</template>

<script>
import Pager from "../components/Pager"
export default {
    components:{
        Pager
    },
    data(){
        return {
            current:1,
            total:204,
        }
    },
    methods:{
        handlePageChange(newPage) {
            this.current = newPage;
        }
    }
}
</script>

<style>

</style>