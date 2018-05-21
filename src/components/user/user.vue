<template>
<transition name="slide">
  <div class="user">
    <div class="back" @click="back">
      <i class="fa fa-angle-left"></i>
    </div>
    <div class="switches-wrapper">
      <switches @switch="switchItem" :switches="switches" :currentIndex="currentIndex"></switches>
    </div>
    <div class="sequence-play" @click="sequence">
      <i class="iconfont icon-bofangicon"></i>
      <span class="text">播放全部</span>
      <span class="count">(共{{count}}首)</span>
    </div>
    <div class="list-wrapper" ref="listWrapper">
      <scroll ref="favoriteList" class="list-scroll" :data="favoriteList" v-if="currentIndex === 0">
        <div class="list-inner">
          <song-list @select="selectSong" :songs="favoriteList"></song-list>
        </div>
      </scroll>
      <scroll ref="playList" class="list-scroll" v-if="currentIndex === 1" :data="playHistory">
        <div class="list-inner">
          <song-list @select="selectSong" :songs="playHistory"></song-list>
        </div>
      </scroll>
    </div>
    <div class="no-result-wrapper" v-show="noResult">
      <no-result :title="noResultDesc"></no-result>
    </div>
  </div>
</transition>
</template>

<script>
import Switches from 'base/switches/switches'
import {mapGetters, mapActions} from 'vuex'
import NoResult from 'base/no-result/no-result'
import Scroll from 'base/scroll/scroll'
import SongList from 'base/song-list/song-list'
// import {playlistMixin} from 'common/js/mixin'

export default {
  data () {
    return {
      currentIndex: 0,
      switches: [
        {name: '我的收藏'},
        {name: '最近播放'}
      ]
    }
  },
  computed: {
    noResult () {
      if (this.currentIndex === 0) {
        return !this.favoriteList.length
      } else {
        return !this.playHistory.length
      }
    },
    count () {
      if (this.currentIndex === 0) {
        return this.favoriteList.length
      } else {
        return this.playHistory.length
      }
    },
    noResultDesc () {
      if (this.currentIndex === 0) {
        return '去寻找属于你自己最爱的MUSIC吧~'
      } else {
        return '你还没有听过歌呀~'
      }
    },
    ...mapGetters([
      'favoriteList',
      'playHistory'
    ])
  },
  methods: {
    back () {
      this.$router.back()
    },
    switchItem (index) {
      this.currentIndex = index
    },
    selectSong (song) {
      this.insertSong(song)
    },
    sequence () {
      let list = this.currentIndex === 0 ? this.favoriteList : this.playHistory
      if (list.length === 0) {
        return
      }
      this.sequencePlay({
        list: list
      })
    },
    ...mapActions([
      'insertSong',
      'sequencePlay'
    ])
  },
  components: {
    Switches,
    SongList,
    Scroll,
    NoResult
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
.user {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: $color-background;
  &.slide-enter-active, &.slide-leave-active {
    transition: all 0.3s;
  }
  &.slide-enter, &.slide-leave-to {
    transform: translate3d(-50%, 0, 0);
    opacity: 0;
  }
  .back {
    position: absolute;
    top: 0;
    left: 4px;
    .fa-angle-left {
      padding: 5px 10px;
      font-size: 30px;
      color: #fff;
    }
  }
  .switches-wrapper {
    display: flex;
    align-items: center;
    background: $color-theme;
    height: 44px;
  }
  .sequence-play {
    position: absolute;
    top: 44px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding-left: 16px;
    border-bottom: 1px solid rgb(228, 228, 228);
    .iconfont {
      font-size: 18px;
      color: $color-text;
      padding-right: 14px;
    }
    .text {
      font-size: $font-size-medium-x;
    }
    .count {
      font-size: $font-size-medium;
      color: $color-text-g;
    }
  }
  .list-wrapper {
    position: absolute;
    top: 84px;
    bottom: 0;
    width: 100%;
    .list-scroll {
      overflow: hidden;
      // width: 100%;
      height: 100%;
    }
  }
  .no-result-wrapper {
    margin-top: 60%;
  }
}
</style>
