import Vue from 'vue'
import Router from 'vue-router'
import Singer from 'cpnts/singer/singer'
import Recommend from 'cpnts/recommend/recommend'
import Rank from 'cpnts/rank/rank'
import Search from 'cpnts/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 默认跳转到 recommend
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
