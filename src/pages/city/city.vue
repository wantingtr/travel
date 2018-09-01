<template lang="html">
  <div class="">
    <city-header></city-header>
    <search></search>
  </div>
</template>

<script>
import cityHeader from './component/cityHeader.vue'
import search from './component/search.vue'
export default {
  name: 'city',
  components: {
    cityHeader,
    search
  }
}
</script>

<style lang="stylus" scoped>
</style>
