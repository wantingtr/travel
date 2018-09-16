import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home.vue'
import city from '@/pages/city/city.vue'
import detail from '@/pages/detail/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/city',
    name: 'city',
    component: city
  }, {
    path: '/detail',
    name: 'detail',
    component: detail
  }]
})
