<template>
  <div id="app">
    <div class="Page-left">
      <nav class="nav-wrapper">
        <div class="navs-header">
          <img class="navs-header-logo" src="/static/images/icon-logo-maihaoche.png">
        </div>
        <ul class="nav-list">
          <li v-for="(item, index) in url" :key="index" :class="{open: item.active}">
            <a :class="['nav-item-title', item.icon]"  @click="item.active = !item.active">
            \{{item.name}}<i class="icon-nav-tab"></i>
            </a>
            <ul class="nav-item-children">
              <li v-for="(item2, index2) in item.children"
                :key="index2"
                :class="{'nav-item-child': true,
                'nav-item-this': item2.url === curUrl}"
                @click="curUrl = item2.url"
                ><router-link :to="item2.url">\{{item2.name}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <main class="Page-right">
      <div class="Page-header">
        <span class="Page-header-title">CMS</span>
        <span class="Page-header-user" @click="statusList = !statusList">\{{ $store.state.userName }}</span>
        <div class="layout-list-wrapper" v-show="statusList">
          <ul class="layout-list">
            <li class="layout-list-item">
              <router-link to="" class="layout-list-item-personalData">我的资料</router-link>
            </li>
            <li class="layout-list-item">
              <router-link to="" class="layout-list-item-exitSystem">退出登录</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="Page-body">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import HollowArrow from "@/components/HollowArrow/HollowArrow";
export default {
  name: "App",
  data() {
    return {
      curUrl: "/ModuleA/Page",
      statusList: false,
      url: [
        {
          name: "A类模块",
          active: true,
          icon: "nav-order-manage",
          children: [
            {
              name: "子模块一",
              url: "/ModuleA/Page"
            }
          ]
        },
        {
          name: "B类模块",
          active: false,
          icon: "nav-assets-manage",
          children: [
            {
              name: "子模块一",
              url: "/ModuleB/Page2"
            },
            {
              name: "子模块二",
              url: "/ModuleB/Page3"
            }
          ]
        }
      ]
    };
  },
  components: {
    HollowArrow
  }
};
</script>

<style lang="scss" scope>
@import "./common/css/reset.css";
@import "./common/css/layout.css";
#app {
  height: 100%;
  .nav-list,
  .layout-list,
  .Page-header-user {
    user-select: none;
  }
}
</style>
