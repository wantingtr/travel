<template lang="html">
  <div class="list" ref='wrapper'>
      <div class="">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button">{{this.$store.state.city}}</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div v-for="item of hotCities"
               :key="item.id"
               @click="changeCity(item.name)"
          >
            <div class="button">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">

        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key='innerItem.id'
            @click="changeCity(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'list',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        // const element = this.$refs[this.letter]
        // 此时element是一个数组，而不是一个DOM元素
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    changeCity (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('./')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .title
    background: #eee
    color: #555
    text-align: left
    line-height: .54rem
    font-size: .26rem
    padding-left: .2rem
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.6rem
    right: 0
    left: 0
    bottom: 0
    .button-list
      overflow: hidden
      margin: .1rem .6rem .1rem .1rem
      .button
        border: .02rem solid #ccc
        float: left
        text-align: center
        width: 29%
        font-size: .32rem
        margin: .1rem
        padding: .1rem 0
        border-radius: .1rem
    .item-list
      overflow: hidden
      margin: .1rem .6rem .1rem .1rem
      .item
        font-size: .35rem
        text-align: left
        line-height: .6rem
        margin: .1rem
</style>
