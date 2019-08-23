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
        'refresh': 'refresh',
        'layout': 'layout'
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
</style>
