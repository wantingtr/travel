<template lang="html">
  <div class="">
    <div class="banner" @click="showgallary">
      <img class="banner-img"
           src="//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg">
      <div class="banner-info">
        <p class="banner-title">上海迪士尼乐园</p>
        <div class="video">
          <p class="video-info">视频</p>
          <span class="iconfont icon-down">&#xe87c;</span>
        </div>
      </div>
    </div>
    <common-gallary
    :imgs="imgs"
    v-show="showGallary"
    @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import commonGallary from 'common/gallary/gallary'
export default {
  name: 'banner',
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1711/d9/d9119bcadf6045f5a3.img.jpg_r_800x800_8628ce0c.jpg', 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_r_800x800_93f1a7af.jpg'],
      showGallary: false
    }
  },
  components: {
    commonGallary
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
