<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'cpnts/m-header/m-header'
import Tab from 'cpnts/tab/tab'
import Player from 'cpnts/player/player'

export default {
  // 这里的代码除了 components，其他的都是用来解决 移动端需不能自动播放的问题
  // 方法很鬼畜，看看就好，找到好的解决办法我会改的
  data () {
    return {
      stop: false
    }
  },
  mounted () {
    let m = document.querySelector('#app')
    m.addEventListener('touchend', this.firstPlay)
  },
  methods: {
    firstPlay () {
      let music = document.querySelector('#music-audio')
      music.play()
      if (music.src !== '') {
        this.stop = true
      }
    }
  },
  watch: {
    stop () {
      let m = document.querySelector('#app')
      m.removeEventListener('touchend', this.firstPlay)
    }
  },
  components: {
    MHeader,
    Tab,
    Player
  }
}
</script>

<style lang="scss">
@import 'common/scss/index.scss';
#app {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
