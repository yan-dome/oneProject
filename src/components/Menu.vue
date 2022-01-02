<template>
  <nav class="Menu-container">
    <router-link
      :exact="item.exact"
      v-for="item in items"
      :key="item.link"
      :to="{name:item.name}"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "./icon";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 是否要精确匹配
          //   startWith: true, // 只要当前路径以link开头，当前菜单就是选中的
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  //   methods:{
  //       isSelected(item) {
  //           var link = item.link.toLowerCase();// 菜单的链接地址
  //           var curPathname = location.pathname.toLowerCase(); //当前浏览器的访问路径
  //          if (item.startWith) {
  //              //startsWith()方法  判断是否以指定字符串开头   是为true 否为false
  //              return curPathname.startsWith(link);
  //          } else {
  //              return curPathname === link;
  //          }

  //       }
  //   },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/global.less";
.Menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    display: block;
    padding: 0 40px;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.selected {
      background: #2d2d2d;
    }
  }
}
</style>