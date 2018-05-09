<template>
  <div class="m-header">
    <h1 class="text">VMUSIC JIN</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";

.m-header {
  position: relative;
  height: 44px;
  width: 100%;
  text-align: center;
  background: $color-theme;
  .text {
    line-height: 44px;
    font-weight: 600;
    color: $color-text-l;
  }
}
</style>
