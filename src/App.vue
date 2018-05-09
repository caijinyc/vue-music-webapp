<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'cpnts/m-header/m-header'
import Tab from 'cpnts/tab/tab'

export default {
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang="scss">
@import 'common/scss/index.scss';
#app {
  width: 100%;
  overflow: hidden;
}
</style>
