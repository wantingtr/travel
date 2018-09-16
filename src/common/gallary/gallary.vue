<template lang="html">
  <div class="container" @click="turnGallary">
    <div class="wrapper">
      <swiper :options="swiperOption">

        <swiper-slide v-for="(item,index) in imgs" :key='index'>
          <img class="gallary-image" :src="item"/>
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>

      </swiper>

    </div>
  </div>
</template>

<script>
export default {
  name: 'commonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    turnGallary () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    z-index: 99
    position: fixed
    display: flex
    flex-direction: column
    justify-content: center
    background: #000
    top: 0
    right: 0
    bottom: 0
    left: 0
    .wrapper
      width: 100%
      .gallary-image
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
        font-size: .32rem
</style>
