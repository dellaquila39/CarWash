import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import DescriptionLetters from '../components/DescriptionLetters.vue'
import AvalibleShifts from '../Modules/Shifts/AvalibleShifts.vue'
import ServicesOffered from '../Modules/Services/ServicesOffered.vue'
import ContactInformation from '../Modules/Contact/ContactInformation.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/DescriptionLetters',
    name: 'DescriptionLetters',
    component: DescriptionLetters
  },
  {
    path: '/Shifts',
    name: 'Shifts',
    component: AvalibleShifts
  },
  {
    path: '/Services',
    name: 'Services',
    component: ServicesOffered
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactInformation
  }

]

const router = new VueRouter({
  routes
})

export default router
