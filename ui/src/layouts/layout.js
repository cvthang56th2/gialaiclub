import { mapGetters } from 'vuex'

export default {
  name: 'layout',

  components: {
  },

  props: {
    source: String
  },

  computed: {
    ...mapGetters([
      'isLoading'
    ])
  },

  data: () => ({}),

  methods: {}
}
