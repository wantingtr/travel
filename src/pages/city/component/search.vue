<template lang="html">
  <div class="searchCity">
    <input class="inputSearch" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
.searchCity
  height: .72rem
  background: $bgColor
  padding: .1rem .1rem 0 .1rem
  .inputSearch
    box-sizing: border-box
    padding: 0 .1rem
    width: 90%
    height: .62rem
    text-align: center
    font-size: .32rem
    display: block
    margin: auto
    border-radius: .1rem
</style>
