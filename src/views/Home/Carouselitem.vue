<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseleave"
  >
    <div class="carousel-img" ref="image" :style="imgePosition">
      <ImagesLoader
        @load="this.showWords"
        :placeholder="carousel.midImg"
        :url="carousel.bigImg"
      />
    </div>
    <div class="title" ref="title">
      {{ carousel.title }}
    </div>
    <div class="desc" ref="desc">
      {{ carousel.description }}
    </div>
    
  </div>
</template>

<script>
import ImagesLoader from "@/components/imagesLoader";
export default {
  props: ["carousel"],
  components: {
    ImagesLoader,
  },
  data() {
    return {
      titleWihth: 0,
      descWidth: 0,
      containerSize: null, //这是外层容器的尺寸
      innerSize: null, // 这是里层图片放大后的尺寸
      mouseX: 0, //鼠标的横坐标，
      mouseY: 0, //鼠标的纵坐标
    };
  },
  computed: {
    //得到图片的坐标
    imgePosition() {
      if (!this.containerSize || !this.innerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; //多出来的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; //多出来的高度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;

      return {
        transform: `translate(${left}px,${top}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.showWords();

    window.addEventListener("resize", this.setSize);
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
  },
  destroyed() {
    removeEventListener("resize", this.setSize);
  },
  methods: {
    //调用该方法显示文字
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      //强行渲染一次
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";
      //desc
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      //强行渲染一次
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    //设置各种屏幕尺寸
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };

      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseleave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container {
  position: relative;
  background:@gray;
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;
}
.carousel-img {
  width: 110%;
  height: 110%;
  left: 0;
  top: 0;
  position: absolute;
  transition: 0.3s;
 
}
.title,
.desc {
  position: absolute;
  letter-spacing: 5px;
  left: 30px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;

  text-shadow: 1px 0px 0px rgba(0, 0, 0, 0.5), -1px 0px 0px rgba(0, 0, 0, 0.5),
    0px 1px 0px rgba(0, 0, 0, 0.5), 0px -1px 0px rgba(0, 0, 0, 0.5);
}
.title {
  top: calc(50% - 30px);

  font-size: 2em;
}
.desc {
  margin-top: 50px;
  font-size: 1.2em;
  top: calc(50% + 20px);
  left: 30px;
  color: lighten(@gray, 20%);
}
</style>