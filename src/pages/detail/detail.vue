<template lang="html">
  <div>
    <banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import banner from './components/banner.vue'
import detailHeader from './components/header.vue'
import detailList from './components/list.vue'
import axios from 'axios'
export default {
  name: 'detail',
  components: {
    banner,
    detailHeader,
    detailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/static/detail.json').then(this.handleGetDetail)
    },
    handleGetDetail (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.list = data.categoryList
        this.gallaryImgs = data.gallaryImgs
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
