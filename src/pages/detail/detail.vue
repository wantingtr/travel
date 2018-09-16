<template lang="html">
  <div>
    <banner></banner>
    <detail-header></detail-header>
    <div class="content">

    </div>
  </div>
</template>

<script>
import banner from './components/banner.vue'
import detailHeader from './components/header.vue'
export default {
  name: 'detail',
  components: {
    banner,
    detailHeader
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
