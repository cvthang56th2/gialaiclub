import TopNav from './top-nav.vue'
import LeftContent from './left-content.vue'
import RightContent from './right-content.vue'
import Breadcumbs from '@/components/breadcumbs.vue'
import Collabs from '@/components/collabs.vue'
import PageFooter from '@/components/page-footer.vue'

export default {
  name: 'layout-client',

  components: {
    TopNav,
    LeftContent,
    RightContent,
    Breadcumbs,
    Collabs,
    PageFooter
  },

  data: () => ({
    admins: [1, 2, 3]
  })
}
