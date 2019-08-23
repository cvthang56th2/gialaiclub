import PopupDetail from '@/modules/admin/components/news/popup/popup.detail.vue'
import NewsService from '@/modules/admin/components/news/services.js'

export default {
  name: 'admin-news',
  components: {
    PopupDetail
  },

  data() {
    return {
      search: '',
      selected: [],
      showPopupDetail: false,
      news: [],
      headers: [
        {
          text: 'Title',
          align: 'left',
          sortable: false,
          value: 'title'
        },
        { text: 'Description', value: 'description' },
        { text: 'Created At', value: 'createdAt' }
      ],
      selectedNewsId: null
    }
  },

  watch: {
    showPopupDetail (v) {
      if (!v) {
        this.selectedNewsId = null
      }
    }
  },

  methods: {
    async fetchData () {
      this._helpers.setLoading()
      try {
        const { data } = await NewsService.getItems()
        this.news = (data && data.data) || []
      } catch (error) {
        console.log(error)
      }
      this._helpers.setLoading(false)
    },
    editNews (newsId) {
      this.showPopupDetail = true
      this.selectedNewsId = newsId
    },
    async removeNews (newsId) {
      this._helpers.setLoading()
      try {
        await NewsService.remove(newsId)
        this.fetchData()
      } catch (error) {
        console.log(error)
      }
      this._helpers.setLoading(false)
    }
  },

  created () {
    this.fetchData()
  },

  middleware: 'auth',
  meta: {
    auth: { authority: 2 }
  }
}
