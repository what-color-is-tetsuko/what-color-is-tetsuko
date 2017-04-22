// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BgMovie from './BgMovie'
import Top from './Top'

Vue.config.productionTip = false

new Vue({
  el: '#bgmovie',
  template: '<BgMovie/>',
  components: { BgMovie }
})

new Vue({
  el: '#top',
  template: '<Top>',
  components: { Top }
})