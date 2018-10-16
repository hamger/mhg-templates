<template>
  <Loading class="hello" :text="home.waitingText" v-if="home.isLoading"/>
  <div class="hello" v-else>
    <img src="@/assets/logo.png">
    <h1>Hello \{{author}}</h1>
    <h2>\{{name}} is a good game!</h2>
    <h2>\{{description}}</h2>
    <h2>Good luck to you!</h2>
    <table class="table-bordered">
      <tbody>
      <tr>
        <th>name</th>
        <th>description</th>
        <th>homepage</th>
        <th>stars</th>
      </tr>
      <tr v-for="item in home.items" :key="item.id">
        <td>\{{item.name}}</td>
        <td>\{{item.description}}</td>
        <td><a :href="item.homepage">\{{item.homepage}}</a></td>
        <td>\{{item.stargazers_count}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '@/components/Loading'
export default {
  name: 'HelloWorld',
  components: {
    Loading
  },
  data () {
    return {
      author: '{{author}}',
      name: '{{name}}',
      description: '{{description}}'
    }
  },
  computed: mapState({
    home: state => state.home
  }),
  methods: {
  },
  created () {
    this.$store.dispatch('getInfo')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    text-align: center;
  }
  h1, h2 {
    font-weight: normal;
  }
  .table-bordered>tbody>tr>th, .table-bordered>tbody>tr>td {
    border: 1px solid #f4f4f4;
  }
</style>
