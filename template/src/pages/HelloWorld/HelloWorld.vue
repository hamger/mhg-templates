<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><el-link url="https://vuejs.org" text="Core Docs"></el-link></li>
      <li><el-link url="https://forum.vuejs.org" text="Forum"></el-link></li>
      <li><el-link url="https://chat.vuejs.org" text="Community Chat"></el-link></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><el-link url="http://router.vuejs.org/" text="vue-router"></el-link></li>
      <li><el-link url="http://vue-loader.vuejs.org/" text="vue-loader"></el-link></li>
      <li><el-link url="https://github.com/vuejs/awesome-vue" text="awesome-vue"></el-link></li>
    </ul>
  </div>
</template>

<script>
// import Link from '@components/Link/Link.vue'
import Link from '../../components/Link/Link.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'el-link': Link
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
/*a {
  color: #42b983;
}*/
</style>
