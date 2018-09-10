<template lang="html">
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont icon-find">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont icon-down">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    height: .88rem
    background: $bgColor
    color: #fff
    font-size: .30rem
    line-height: .86rem
    padding: 0
    .header-left
      width: 10%
      float: left
    .header-input
      flex: 1
      background: #fff
      border-radius: .1rem
      margin: .12rem 0
      color: #ccc
      line-height: .64rem
      text-align: left
      .icon-find
        font-size: .35rem
        padding: .1rem
    .header-right
      margin-left: .1rem
      float: right
      text-align: center
      color: #fff
      font-size: .32rem
      .icon-down
        font-size: .2rem
        margin-left: -0.02rem
</style>
