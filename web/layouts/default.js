
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Home',
          to: '/'
        }
      ],
      miniVariant: false,
      title: 'FRONT LAYOUT',
      breadcumbItems: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ],
      text: 'lorem ipsum'
    }
  },

  computed: {
    ...mapGetters({
      loadingPage: 'root/loadingPage'
    })
  }
}
