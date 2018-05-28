<template>
  <div id="app">
    <div class="Page-left">
      <nav class="nav-wrapper">
        <div class="navs-header">
          <img class="navs-header-logo" src="/static/images/icon-logo-maihaoche.png">
        </div>
        <ul class="nav-list">
          <li v-for="item in url" :class="{open: item.active}">
            <a :class="['nav-item-title', item.icon]"  @click="item.active = !item.active">
            \{{item.name}}<i class="icon-nav-tab"></i>
            </a>
            <ul class="nav-item-children">
              <li v-for="(item2, index2) in item.children"
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
      <header class="status-header">
        <div class="status-box">\{{ $store.state.userName }}</div>
      </header>
      <div class="main">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import HollowArrow from '@/components/HollowArrow/HollowArrow';
export default {
  name: 'App',
  data () {
    return {
      curUrl: '/ModuleA/Page',
      url: [
        {
          name: 'A类模块',
          active: true,
          icon: 'nav-order-manage',
          children: [
            {
              name: '子模块一',
              url: '/ModuleA/Page'
            },
          ]
        },
        {
          name: 'B类模块',
          active: false,
          icon: 'nav-assets-manage',
          children: [
            {
              name: '子模块一',
              url: '/ModuleB/Page2'
            },
            {
              name: '子模块二',
              url: '/ModuleB/Page3'
            },
          ]
        }
      ]
    }
  },
  components: {
    HollowArrow
  }
}
</script>

<style lang="scss" scope>
@import './common/css/reset.css';
@import './common/css/layout.css';
#app {
  height: 100%;
  .nav-list {
    user-select: none;
  }
  .main {
    margin: 10px;
    background-color: #fff;
    height: 100%;
  }
}
</style>
