<template lang="html">
  <div>
    <div class="recommend-title">热销推荐</div>
      <ul>
        <router-link to="./detail/">
          <li class="item border-bottom" v-for='(item,index) of recommendList' :key="index">
            <img class="item-img"
                 :src='item.imgUrl'>
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-content">{{item.content}}</p>
              <button class="item-button" type="button" name="button">查看详情</button>
            </div>
          </li>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  a
    color: #333
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
