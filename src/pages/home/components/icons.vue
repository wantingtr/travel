<template lang="html">
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content"src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
      </div>
      <p class="icon-text">景点门票</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content"src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
      </div>
      <p class="icon-text">景点门票</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeIcons'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .icons
    height: 0
    padding-bottom: 50%
    overflow: hidden
    .icon
      float: left
      width: 25%
      padding-bottom: 25%
      overflow: hidden
      position: relative
      height: 0
      .icon-text
        height: .44rem
        line-height: .44rem
        position: absolute
        left: 0
        right: 0
        bottom: 0
        text-align: center
        font-size: .3rem
        color: $dark-text-color
      .icon-img
        position: absolute
        top:0
        right: 0
        left: 0
        bottom:.35rem
        box-sizing: border-box
        padding: .05rem
        .icon-img-content
          display: block
          height: 100%
          margin: 0 auto

</style>
