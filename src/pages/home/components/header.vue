<template lang="html">
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont icon-find">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont icon-down">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .header
    display: flex
    height: .86rem
    background: $bgColor
    color: #fff
    font-size: .30rem
    line-height: .86rem
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
      width: 17%
      float: right
      text-align: center
      .icon-down
        font-size: .2rem
        margin-left: -0.02rem
</style>
