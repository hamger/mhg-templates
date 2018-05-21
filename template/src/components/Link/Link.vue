<template>
  <a :href="url" target="_blank">\{{text}}</a>
</template>

<script>
export default {
  name: 'el-link',
  props: {
    url: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: '无文本'
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
