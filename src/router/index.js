import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WesComponent from '@/components/WesComponent'
import TomComponent from '@/components/TomComponent'
import KaylaComponent from '@/components/KaylaComponent'
import RyanComponent from '@/components/RyanComponent'

Vue.use(Router)
window.axios = require('axios')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/wes',
      name: 'wes',
      component: WesComponent
    },
    {
      path: '/tom',
      name: 'tom',
      component: TomComponent
    },
    {
      path: '/kayla',
      name: 'kayla',
      component: KaylaComponent
    },
    {
      path: '/ryan',
      name: 'ryan',
      component: RyanComponent
    }
  ]
})
