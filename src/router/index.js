// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import CarInsuranceForm from '../components/CarInsuranceForm.vue'

const routes = [
  { path: '/', name: 'Home', component: LandingPage },
  { path: '/assurance-voiture-maroc', name: 'CarInsuranceForm', component: CarInsuranceForm }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
