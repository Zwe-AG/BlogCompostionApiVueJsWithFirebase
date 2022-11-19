import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Create from '../views/Create.vue'
import Detail from '../views/Detail.vue'
import Tag from '../views/Tag.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    props:true
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component: Tag,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
