<template>
  <div class="search-box">
    <i class="icon-search"></i>
    <input :placeholder="placeholder" v-model="query" type="text" class="box">
    <i v-show="query" class="icon-dismiss" @click="clear"></i>
    <!-- <span class="search" >{{clickInfo}}</span> -->
  </div>
</template>

<script>
import {debounce} from 'common/js/utl'

export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索歌曲、歌手'
    }
  },
  data () {
    return {
      query: '',
      clickInfo: '搜索'
    }
  },
  created () {
    this.$watch('query', debounce((newQuery) => {
      this.$emit('query', newQuery)
    }, 300))
  },
  methods: {
    clear () {
      this.query = ''
    },
    setQuery (query) {
      this.query = query
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~common/scss/variable";

.search-box {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 6px;
  height: 40px;
  background: #fff;
  border-radius: 6px;
  border: 1px solid rgb(235, 235, 235);
  .icon-search {
    font-size: 24px;
    color: $color-text-g;
  }
  .box {
    flex: 1;
    margin: 0 5px;
    line-height: 25px;
    background: #fff;
    color: $color-text;
    font-size: $font-size-medium;
    &::placeholder {
      color: $color-text;
    }
  }
  .icon-dismiss {
    font-size: 16px;
    color: $color-text-g;
  }
  .search {
    padding: 0 5px;
    font-size: 14px;
    color: $color-text;
  }
}
</style>
