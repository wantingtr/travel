<template lang="html">
  <div >
    <div class="searchCity">
      <input v-model="keyword" class="inputSearch" type="text" placeholder="输入城市名或拼音">
    </div>

    <div class="search-content" ref="search" v-show='keyword'>
      <ul>
        <li class="search-item border-bottom"
        v-for="item of list"
        :key="item.id"
        @click="changeCity(item.name)"
        >
        {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
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
.searchCity
  height: .72rem
  background: $bgColor
  padding: .1rem .1rem 0 .1rem
  .inputSearch
    box-sizing: border-box
    padding: 0 .1rem
    width: 95%
    height: .62rem
    text-align: center
    font-size: .32rem
    display: block
    margin: auto
    border-radius: .1rem
.search-content
  position: absolute
  top: 1.58rem
  right: 0
  left: 0
  bottom: 0
  background: #eee
  overflow: hidden
  z-index: 1
  .search-item
    font-size: .38rem
    text-align: left
    padding-left: .3rem
    line-height: .62rem
    color: #666
    background: #fff
</style>
