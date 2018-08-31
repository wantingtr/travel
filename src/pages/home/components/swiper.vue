<template lang="html">
  <div class="wrapper">
    <!--最外层的div标签，是为了防止页面加载时间形成闪烁-->
    <swiper :options="swiperOption" v-if="showSwiper">

      <swiper-slide v-for="item of list" :key='item.id'>
        <img class="swiper-image" :src="item.imgUrl">
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
      <!--pagination为轮播图下方的小圆点，并且所有的slot都需要在data中定义 -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  width: 100%
  height:0
  overflow: hidden
  padding-bottom: 26.5%
  .swiper-image
    width:100%
</style>
