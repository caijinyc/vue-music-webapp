import Vue from 'vue'
import Router from 'vue-router'
import Singer from 'cpnts/singer/singer'
import Recommend from 'cpnts/recommend/recommend'
import Rank from 'cpnts/rank/rank'
import Search from 'cpnts/search/search'
import MusicList from 'cpnts/music-list/music-list'
import SingerDetail from 'cpnts/singer-detail/singer-detail'
import RankDetail from 'cpnts/rank-detail/rank-detail'

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
      component: Recommend,
      children: [
        {
          path: ':id',
          component: MusicList
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: 'singer/:id',
          component: SingerDetail
        },
        {
          path: 'list/:id',
          component: MusicList
        }
      ]
    }
  ]
})
