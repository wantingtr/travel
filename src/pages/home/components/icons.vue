<template lang="html">
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon"
             v-for="item of page"
             :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src='item.imgUrl' alt="">
          </div>
          <p class="icon-text">{{item.title}}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  props: {
    iconList: Array
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        // 计算当前index所处页面
        if (!pages[page]) {
          pages[page] = []
          // 当前page溢出，新建页面
        }
        pages[page].push(item)
      })
      return pages
      // 根据数据自动构建页码，实现多页切换的轮播图
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons>>>.swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
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
        ellipsis()
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
