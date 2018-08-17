<template lang="html">
  <div class="">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div class="">
      test
    </div>
  </div>
</template>

<script>
import homeHeader from './components/header.vue'
import homeSwiper from './components/swiper.vue'
export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper
  }
}
</script>

<style lang="css">

</style>
