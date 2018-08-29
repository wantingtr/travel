<template lang="html">
  <div>
    <div class="recommend-title">周末去哪儿</div>
      <ul>
        <li class="item border-bottom" v-for='(item,index) of recommendList' :key="index">
          <div class="item-img-wrapper">
            <img class="item-img"
                 :src='item.imgUrl'>
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-content">{{item.content}}</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
        title: '上海必游top10',
        content: '中西合璧，现代和传统各有各的精彩'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
        title: '上海城市观光',
        content: '来这里寻找你所认识的上海'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg',
        title: '情迷博物馆',
        content: '穿梭时光岁月寻找答案'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    text-align: left
    font-size: .32rem
  .item
    height: 4rem
    font-size: .37rem
    text-align: left
    margin: .1rem 0
    .item-img
      height: 2.8rem
    .item-info
      flex: 1
      padding: .1rem
      line-height: .4rem
      .item-title
        padding-top: .1rem
      .item-content
        font-size: .28rem
        padding: .1rem 0
        color: #9e9e9e
    .item-button
      font-size: .32rem
      background: #b2b2b2
      border-radius: .06rem
      width: 1.7rem
      color: #fff
      margin-top: .2rem
</style>
