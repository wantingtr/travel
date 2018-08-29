<template lang="html">
  <div class="">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import homeHeader from './components/header.vue'
import homeSwiper from './components/swiper.vue'
import homeIcons from './components/icons.vue'
import HomeRecommend from './components/recommend.vue'
import HomeWeekend from './components/weekend.vue'

export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style lang="css">

</style>
