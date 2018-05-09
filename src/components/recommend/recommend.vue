<template>
  <div class="recommend">
    <scroll class="recommend-content" :data="playList">
      <div >
        <div class="decorate" v-if="banner.length"></div>
        <div v-if="banner.length" class="slider-wrapper">
          <slider>
            <div v-for="item in banner" :key="item.id">
              <img :src="item.picUrl">
            </div>
          </slider>
        </div>
        <div class="recommend-list" ref="recommendList">
          <h1 class="title">推荐歌单</h1>
          <ul>
            <li class="item" v-for="item in playList" :key="item.id">
              <div class="icon">
                <div class="gradients"></div>
                <img v-lazy="item.picUrl">
              </div>
              <p class="play-count">{{Math.floor(item.playCount / 10000) }}万</p>
              <p class="text">{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import Slider from 'base/slider/slider'
import {getBanner, getRecommendList} from 'api/recommend'
import {ERR_OK} from 'common/js/config'

export default {
  data () {
    return {
      banner: [],
      playList: []
    }
  },
  created () {
    this._getBanner()
    this._getRecommendList()
    // this.$refs.recommendList.style.
  },
  methods: {
    _getBanner () {
      getBanner().then((res) => {
        if (res.status === ERR_OK) {
          // let list = res.data.banners.map((item) => {
          //   if (item.)
          // })
          let list = res.data.banners
          this.banner = list.splice(4)
          console.log(this.banner)
        } else {
          console.error('Banner 获取有误')
        }
      })
    },
    _getRecommendList () {
      getRecommendList().then((res) => {
        this.playList = res.data.result
        console.log(res)
      })
    }
  },
  components: {
    Slider,
    Scroll
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
 .recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
    overflow: hidden;
  .recommend-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .decorate {
      position: absolute;
      top: -20vh;
      z-index: -10;
      background: $color-theme;
      width: 100%;
      height: 40vh;
      vertical-align: inherit;
    }
    .slider-wrapper {
      width: 96%;
      margin: 0 auto;
      border-radius: 5px;
      overflow: hidden;
    }
    .recommend-list {
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      .title {
        height: 65px;
        line-height: 65px;
        padding-left: 1.5%;
        text-align: left;
        font-size: $font-size-medium;
        font-weight: 600;
        color: $color-text;
      }
      .item {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        width: 33%;
        padding: 0 1%;
        .icon {
          position: relative;
          display: inline-block;
          width: 100%;
          margin-bottom: 5px;
          .gradients {
            position: absolute;
            top: 0;
            width: 100%;
            height: 35px;
            border-radius: 3px;
            background: linear-gradient(rgba(109, 109, 109, 0.4),rgba(255, 255, 255, 0));
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 3px;
          }
        }
        .play-count {
          position: absolute;
          top: 5px;
          right: 8px;
          font-size: $font-size-small-s;
          color: $color-text-l
        }
        .text {
          line-height: 16px;
          text-align: left;
          height: 40px;
          margin-bottom: 10px;
            overflow: hidden;
          // text-align-last: left;
          font-size: $font-size-small;
        }
      }
    }
  }
 }
</style>
