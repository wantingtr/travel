<template lang="html">
  <div class="">
    <city-header></city-header>
    <search :cities="cities"></search>
    <list
    :cities="cities"
    :hotCities="hotCities"
    :letter="letter"
    ></list>
    <cityAlphabet
    :cities="cities"
    @change="handleClick"></cityAlphabet>
  </div>
</template>

<script>
import cityHeader from './component/cityHeader.vue'
import search from './component/search.vue'
import list from './component/list.vue'
import cityAlphabet from './component/Alphabet.vue'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    cityHeader,
    search,
    list,
    cityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleGetCity)
    },
    handleGetCity (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleClick (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
