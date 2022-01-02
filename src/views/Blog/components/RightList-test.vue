<template>
  <RightList :list="list" @select="handleSelect" />
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        {
          name: "b",
          isSelect: true,
          children: [
            {
              name: "c-1",
              isSelect: true,
              children: [
                { name: "c-1-1", isSelect: true },
                { name: "c-2-1", isSelect: false },
                { name: "c-3-1", isSelect: false },
              ],
            },
            { name: "c-2", isSelect: false },
            { name: "c-3", isSelect: false },
          ],
        },
        { name: "c", isSelect: false },
        { name: "d", isSelect: false },
      ],
    };
  },
  methods:{
      handleSelect(item){
          console.log(item);
      }
  }
};
</script>

<style>
</style>