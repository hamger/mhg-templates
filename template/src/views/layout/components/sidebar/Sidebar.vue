<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <sidebar-menu :menu="menu" :isCollapse="isCollapse"></sidebar-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import sidebarMenu from './menu.jsx'

export default {
  name: 'sidebar',
  components: {
    Hamburger, sidebarMenu
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    menu () {
      return this.$store.state.app.menu
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('toggleSideBar')
    }
  }
}
</script>
