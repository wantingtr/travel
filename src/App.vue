<template>
  <div id="app">
    <router-view/>
    <!--显示的是当前路由地址所对应的内容 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
  font-size: 50px;
}
</style>
