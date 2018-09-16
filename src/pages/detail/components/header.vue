<template lang="html">
  <div>
    <router-link rag="div" to="/" class="header-abs" v-show="showABS">
      <span class="iconfont">&#xe624;</span>
    </router-link>
  <div class="header-fixed" v-show="!showABS">
      景点详情
      <router-link to='/'>
        <span class="iconfont">&#xe624;</span>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      showABS: true
    }
  },
  methods: {
    handleScroll () {
      /*
      const top = document.documentElement.scrollTop
      if (top > 60) {
        this.showABS = false
      } else {
        this.showABS = true
      }
      */
      console.log(document.documentElement.scrollTop)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
.header-abs
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  border-radius: .4rem
  background: rgba(0, 0, 0, 0.6)
  text-align: center
  line-height: .4rem
  .iconfont
    color: #fff
    font-size: .36rem
    font-weight: bold
.header-fixed
  font-size: .35rem
  background-color: $bgColor
  color: #fff
  line-height: .78rem
  text-align: center
  position: fixed
  top: 0
  left: 0
  right: 0
  .iconfont
    position: absolute
    top: 0
    left: 0
    padding: 0 .2rem
    font-size: .4rem
    color: #fff
    font-size: .35rem
</style>
