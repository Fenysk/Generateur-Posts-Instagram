import { createRouter, createWebHashHistory } from 'vue-router'
import NouveauxProduits from '../views/NouveauxProduits.vue'

const routes = [
  {
    path: '/new-products',
    name: 'new-products',
    component: NouveauxProduits
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
