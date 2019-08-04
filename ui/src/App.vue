<template>
  <div id="app">
    <div id="nav">
      <Layout />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Layout from '@/layouts/layout.vue'

 export default {
    name: 'app',

    components: {
      Layout
    },

    computed: {
      ...mapGetters({
        'notify': 'notify',
        'refresh': 'refresh'
      })
    },

    data: () => ({
    }),

    created () {
    },

    watch: {
      notify(notify) {
        this[notify.action](notify)
      }
    }
  }
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
