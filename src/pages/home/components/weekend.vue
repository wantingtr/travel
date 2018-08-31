<template lang="html">
  <div>
    <div class="recommend-title">周末去哪儿</div>
      <ul>
        <li class="item border-bottom" v-for='(item,index) of weekendList' :key="index">
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
  props: {
    weekendList: Array
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
