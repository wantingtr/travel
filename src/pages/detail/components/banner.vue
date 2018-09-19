<template lang="html">
  <div class="">
    <div class="banner" @click="showgallary">
      <img class="banner-img"
           :src="bannerImg">
      <div class="banner-info">
        <p class="banner-title">{{this.sightName}}</p>
        <div class="video">
          <p class="video-info">视频</p>
          <span class="iconfont icon-down">&#xe87c;</span>
        </div>
      </div>
    </div>
    <fade>
      <common-gallary
      :imgs="gallaryImgs"
      v-show="showGallary"
      @close="handleGallaryClose"
      ></common-gallary>
    </fade>
  </div>
</template>

<script>
import commonGallary from 'common/gallary/gallary'
import fade from 'common/fade/fade'
export default {
  name: 'banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
    categoryList: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    commonGallary,
    fade
  },
  methods: {
    showgallary () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  padding-bottom: 55%
  position: relative
  overflow: hidden
  height: 0
  .banner-img
    width: 100%
  .banner-info
    font-size: .37rem
    position: absolute
    display: flex
    bottom: 0
    left: 0
    right: 0
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex: 1
      text-align: left;
      padding-left: .1rem
      line-height: .52rem
    .video
      display: flex
      padding-right: .1rem
      .video-info
        line-height: .52rem
      .iconfont
        padding: .1rem
</style>
