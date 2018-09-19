<template lang="html">
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <detailList :list="item.children"></detailList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.item-title
  text-align: left
  font-size: .4rem
  line-height: .8rem
  padding-left: .2rem
.item-children
  padding-left: .6rem
.item-title-icon
  position: relative;
  left: .1rem;
  top: .06rem;
  display: inline-block;
  width: .36rem;
  height: .36rem;
  background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
  margin-right: .1rem;
  background-size: .4rem 3rem;
</style>
