// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

var BgMovie = Vue.extend({
  template: `<template>
  <div class='bgmovie'>
	<iframe frameborder="0" height="100%" width="100%" src="https://www.youtube.com/embed/iS8jKACWPuw?autoplay=1&controls=0&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1&loop=1"></iframe>
    <div id="top"></div>
  </div>
</template>`
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
