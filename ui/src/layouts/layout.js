import { mapGetters } from 'vuex'
import LayoutClient from '@/layouts/layout-client.vue'
import LayoutAdmin from '@/layouts/layout-admin.vue'

export default {
  name: 'layout',

  components: {
    LayoutClient,
    LayoutAdmin
  },

  props: {
    source: String
  },

  computed: {
    ...mapGetters([
      'isLoading'
    ])
  },

  data: () => ({
    layout: 'client'
  }),

  watch: {
    '$route.meta': 'detectLayout'
  },

  methods: {
    detectLayout (meta = {}) {
      if (meta.layout === 'admin') {
        this.layout = 'admin'
      } else {
        this.layout = 'client'
      }
    }
  },
  created () {
  }
}
