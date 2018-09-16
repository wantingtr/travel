<template lang="html">
  <ul class="list">
    <li
    class="item"
    v-for="(item,key) of cities"
    :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    cities: Object
  },
  handleClick (e) {
    this.$emit('change', e.target.innerText)
    // 为字母绑定一个click事件，当点击时向外触发事件，事件的名字为‘change’，携带的内容即为这个字母
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    bottom: 0
    top: 1.6rem
    font-size: .32rem
    width: .6rem
    .item
      text-align: center
      line-height: .4 rem
      color: $bgColor
</style>
