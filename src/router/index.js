import { createRouter, createWebHashHistory } from 'vue-router'
import NouveauxProduits from '../views/NouveauxProduits.vue'
import ModeDemploi from '../views/ModeDemploi.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'new-products'}
  },

  {
    path: '/new-products',
    name: 'new-products',
    component: NouveauxProduits
  },
  
  {
    path: '/mode-d-emploi',
    name: 'mode-d-emploi',
    component: ModeDemploi
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
