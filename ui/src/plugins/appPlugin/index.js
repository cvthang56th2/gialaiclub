// import * as Filter from '@/plugins/mazi/filters'
import * as Helpers from '@/utils/helpers'

const AppPlugin = {
  install(Vue, options) {
    /* Register prototype */
    Vue.prototype._helpers = Helpers

    /* Register Directives */

    /* Register Filter */

    /* Register Component */

    Vue.mixin({
      data: () => ({
      }),

      beforeCreate() {
      },

      methods: {
        nextTick() {
          return new Promise(resolve => this.$nextTick(resolve))
        },
        goTo(route, newTab) {
          if (newTab === true || (newTab instanceof MouseEvent && newTab.ctrlKey) || (newTab instanceof MouseEvent && newTab.type === 'mouseup' && newTab.which === 2)) {
            let routeData = this.$router.resolve(route)
            return window.open(routeData.href, '_blank')
          }
          this.$router.push(route)
        },
        getHref(route) {
          return this.$router.resolve(route).href
        },
        openLink(link, newTab) {
          if (!link || link === '') {
            return
          }
          if (!link.match(/^http/gmi)) {
            link = 'http://' + link
          }
          if (newTab) {
            console.log(link)
            return window.open(link, '_blank')
          }
          window.location.replace(link)
        },
        download(url) {
          // window.open(url, 'Download')
          let link = document.createElement('a')
          link.href = url
          link.download = name
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        },
        errorHandle (error, title) {
          Helpers.errorNotify({
            title: title || this.$options.notifyTitle || 'Error',
            message: Helpers.apiErrorMessage(error.response || error)
          })
        },
        successHandle (message, title) {
          Helpers.successNotify({
            title: title || this.$options.notifyTitle || 'Success',
            message
          })
        },
        warnHandle (message, title) {
          Helpers.warnNotify({
            title: title || this.$options.notifyTitle || 'Warn',
            message
          })
        },
        infoHandle (message, title) {
          Helpers.infoNotify({
            title: title || this.$options.notifyTitle || 'Info',
            message
          })
        }
      }
    })
  }
}

export default AppPlugin
