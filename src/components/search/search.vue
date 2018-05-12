<template>
  <div class="search" ref="searchWrapper">
    <scroll class="search-scroll-wrapper" ref="scroll" :pullup="pullup" @scrollToEnd="searchMore">
      <div ref="search">
        <div class="search-box-wrapper">
          <search-box @query="onQueryChange" ref="searchBox"></search-box>
        </div>
        <div class="search-hots" v-show="!query">
          <span class="search-hots-item" v-for="item in hots" :key="item.id" @click="addQuery(item.first)">
            {{item.first}}
          </span>
        </div>
        <div class="shortcut-wrapper" v-show="!query">
          <div class="search-history" v-show="searchHistory.length">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear" >
                <i class="icon-clear" ></i>
              </span>
            </h1>
            <search-list @select=addQuery @delete="deleteSearchHistory" :searches="searchHistory"></search-list>
          </div>
        </div>
        <div class="search-result">
          <suggest @select="saveSearch" @refresh="refresh" :query="query" ref="suggest"></suggest>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import SearchBox from 'base/search-box/search-box'
import Suggest from 'cpnts/suggest/suggest'
import SearchList from 'base/search-list/search-list'
import {searchMixin, playlistMixin} from 'common/js/mixin'
import {getSearchHot} from 'api/search'

export default {
  mixins: [searchMixin, playlistMixin],
  data () {
    return {
      pullup: true,
      hots: []
    }
  },
  created () {
    this._getSearchHot()
  },
  methods: {
    _getSearchHot () {
      getSearchHot().then((res) => {
        this.hots = res.data.result.hots
        console.log(this.hots)
      })
    },
    onQueryChange (query) {
      this.query = query
    },
    addQuery (query) {
      this.$refs.searchBox.setQuery(query)
    },
    saveSearch () {
      this.saveSearchHistory(this.query)
    },
    searchMore () {
      this.$refs.suggest.searchMore()
    },
    refresh () {
      setTimeout(() => {
        this.$refs.scroll.refresh()
      }, 20)
    },
    handlePlaylist (playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.searchWrapper.style.bottom = bottom
      this.refresh()
    }
  },
  components: {
    Scroll,
    SearchBox,
    Suggest,
    SearchList
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";

.search {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 88px;
  bottom: 0;
  .search-scroll-wrapper {
    height: 100%;
    overflow: hidden;
    .search-box-wrapper {
      margin: 10px 20px;
    }
    .search-hots {
      margin: 0 20px;
      span {
        display: inline-block;
        padding: 3px 5px;
        margin: 4px 4px;
        border: 0.8px solid $color-text-ggg;
        border-radius: 5px;
        line-height: 20px;
        color: $color-text;
        font-size: $font-size-medium;
      }
    }
    .shortcut-wrapper {
      position: relative;
      // top: 178px
      // bottom: 0
      // width: 90%
      margin: 0 auto;
      .shortcut {
        height: 100%;
        overflow: hidden;
        .hot-key {
          margin: 0 20px 20px 20px;
          .title {
            margin-bottom: 20px;
            font-size: $font-size-medium;
            color: $color-text;
          }
          .item {
            display: inline-block;
            padding: 5px 10px;
            margin: 0 20px 10px 0;
            border-radius: 6px;
            background: $color-highlight-background;
            font-size: $font-size-medium;
            color: $color-text;
          }
        }
      }
      .search-history {
        position: relative;
        margin: 10px 25px;
        .title {
          display: flex;
          align-items: center;
          height: 40px;
          font-size: $font-size-medium;
          color: $color-text;
          .text {
            // font-size: 13px;
            flex: 1;
          }
          .clear {
            @include extend-click();
            .icon-clear {
              font-size: $font-size-medium;
              color: $color-text;
            }
          }
        }
      }
    }
    .search-result {
      position: relative;
      width: 100%;
      top: 10px;
      bottom: 0;
    }
  }
}
.router-view {
  z-index: 1000;
}
</style>
