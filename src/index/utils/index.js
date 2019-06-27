import * as Utils from './utils'
export default {
  install(Vue, options) {
    Vue.bqUtils = Utils
    Vue.mixin({
      created: function() {
        this.$bqUtils = Utils
      }
    })
  }
}