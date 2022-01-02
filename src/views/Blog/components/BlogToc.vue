<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWidthSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/utils/";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      //可以控制哪个被选中
      activeAnchor: "",
    };
  },
  props: {
    toc: {
      type: Array,
    },
  },
  computed: {
    //根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWidthSelect() {
      //运用到了递归 仔细理解

      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },
    //根据toc得到他们对应的数组
    doms() {
      const doms = [];

      const addTocDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addTocDoms(t.children);
          }
        }
      };
      addTocDoms(this.toc);
      return doms;
    },
  },
  created() {
    //防抖
    this.setSelectDe = debounce(this.setSelect, 150);
    //监听事件总线
    this.$Bus.$on("mainScroll", this.setSelectDe);
  },
  destroyed() {
    this.$Bus.$off("mainScroll", this.setSelectDe);
  },

  methods: {

    handleSelect(item) {
    
     location.hash  =  item.anchor ;
      
    },
    //设置activeAnchor为正确是值
    setSelect(scrollDom) {
      //如果元素不存在
      if(!scrollDom){
        return;
      }
      //规定一个可视范围 来判断是否到了观看的位置
      this.activeAnchor = ""; //由于后续要重新设置先清空
      const range = 200;
      for (const dom of this.doms) {
        //看一下这个元素是否应该选中
        if (!dom) {
          continue;
        }
        //得到元素离视口的矩形区域值
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          //在整个范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          //在整个范围的下方
          return;
        } else {
          //在这个范围的上方
          this.activeAnchor = dom.id; //假设自己被激活  然后继续看后面
        }
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;

  h2 {
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>