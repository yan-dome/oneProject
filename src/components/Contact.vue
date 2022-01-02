<template>
  <ul class="Contact-container">
     <li>
      <a target="_blank" :href="data.gihub">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img
          :src="data.weixinQrCode"
          alt=""
        />
      </div>
    </li>
    <li>
      <a target="_blank" href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&redirect_uri=http%3A%2F%2Fspcdp.cdposs.qq.com%2Fauth%2Fcallback&client_id=101477813&state=http%3A%2F%2Fspcdp.cdposs.qq.com%2F">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img
          :src="data.qqQrCode"
          alt=""
        />
      </div>
    </li>
   
    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="email" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from "./icon";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed:mapState("setting",["data"])
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.Contact-container {
  list-style: none;
  padding: 0;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  
  li {
    height: 30px;
    line-height: 30px;
    margin: 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
   
    cursor: pointer;
    display: flex;
    align-content: center;
    font-size: 14px;
  }
  .icon {
    font-size: 26px;
    width: 36px;
  }
    .pop {
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: @itemHeight - 5px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 10px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      position: absolute;
      content: "";
     
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      opacity: 1;
      bottom: 4px;
      width: 8px;
      height: 8px;
      background: #fff;
    }
  }
}
</style>