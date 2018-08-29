<template lang="html">
  <div>
    <div class="recommend-title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for='(item,index) of recommendList' :key="index">
          <img class="item-img"
               :src='item.imgUrl'>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-content">{{item.content}}</p>
            <button class="item-button" type="button" name="button">查看详情</button>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪士尼乐园',
        content: '上海市浦东新区川沙新镇上海迪士尼度假区内'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1502/ba/ba5f873a22327e0f.water.jpg_200x200_9bf5cc14.jpg',
        title: '上海影视乐园',
        content: '上海市松江区车墩镇北松公路4915号'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_110x110_24c155d5.jpg',
        title: '东方明珠',
        content: '上海市浦东新区世纪大道1号'
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
    text-align: left
    display: flex
    height: 2.4rem
    font-size: .37rem
    .item-img
      height: 2rem
      width: 2rem
      padding: .2rem
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
