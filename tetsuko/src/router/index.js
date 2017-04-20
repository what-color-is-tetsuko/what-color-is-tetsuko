import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
// import 'css/common.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hoge',
      component: Top
    }
  ]
})
