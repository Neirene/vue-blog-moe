import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components'
import TitleScreen from '../components/TitleScreen'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/home',
    name: 'feed',
    component: Blog
  }, {
    path: '/by/:author',
    name: 'author',
    props: true,
    component: Blog
  }, {
    path: '/read/:post',
    name: 'post',
    props: true,
    component: Blog
  }, {
    path: '/',
    name: 'title',
    props: true,
    component: TitleScreen
  }]
})
