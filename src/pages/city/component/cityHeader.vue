<template lang="html">
  <div class="header">
    城市选择
    <router-link to='/'>
      <span class="iconfont">&#xe624;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
.header
  font-size: .35rem
  background-color: $bgColor
  color: #fff
  line-height: .78rem
  text-align: center
  .iconfont
    position: absolute
    top: 0
    left: 0
    padding: 0 .2rem
    font-size: .4rem
    color: #fff
    font-size: .35rem
</style>
