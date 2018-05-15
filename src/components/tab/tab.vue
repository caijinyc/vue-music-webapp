<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span>排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span>歌手</span>
    </router-link>
    <!-- <router-link tag="div" class="tab-item" to="/search">
      <span>搜索</span>
    </router-link> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
.tab {
  display: flex;
  line-height: 44px;
  height: 44px;
  width: 100%;
  font-size: $font-size-medium;
  background: $color-theme;
  .tab-item {
    // 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）
    flex: 1;
    // 垂直
    text-align: center;
    color: $color-text-lm;
    span {
      // display: inline-block;
      padding-bottom: 3px;
    }
    &.router-link-active {
      span {
        font-weight: bold;
        color: $color-text-l;
        border-bottom: 2px solid $color-text-l
      }
    }
  }
}
</style>
