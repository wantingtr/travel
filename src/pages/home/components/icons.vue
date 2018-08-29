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
          <p class="icon-text">{{item.icontext}}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        icontext: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        icontext: '水上乐园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        icontext: '游乐场'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
        icontext: '城市观光'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        icontext: '景点门票'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        icontext: '水上乐园'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        icontext: '游乐场'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
        icontext: '城市观光'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
        icontext: '城市观光'
      }]
    }
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
