import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Member from '../components/Member.vue'
import Shopcar from '../components/Shopcar'
import Search from '../components/Search'
import News from '../components/News.vue'
import Comments from '../components/Comments.vue'
import Photo from '../components/Photo.vue'
import ImageDetail from '../components/ImageDetail.vue'
import Goods from '../components/Goods.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/member', component: Member },
  { path: '/shopcar', component: Shopcar },
  { path: '/search', component: Search },
  { path: '/news/list', component: News },
  { path: '/comments', component: Comments },
  { path: '/photo/list', component: Photo },
  { path: '/imagedetail', component: ImageDetail },
  { path: '/goods/list', component: Goods }
]

const router = new VueRouter({
  routes
})

export default router
