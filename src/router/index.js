import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Hello from '@/components/Hello'
import BgMovie from '@/components/BgMovie'
import Quiz from '@/components/Quiz'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      component: Top
    },
    { path: '/quiz',
      component: Quiz
    }
  ]
})
