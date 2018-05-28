<template>
  <div id="app">
    <img src="/static/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
    {{#vuex}}
    <h1>{{ $store.state.example }}</h1>
    {{/vuex}}
  </div>
</template>

<script>
{{#unless router}}
import HelloWorld from './pages/HelloWorld/HelloWorld'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    HelloWorld
  }{{/router}}
}
</script>

<style>
@import './common/css/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
