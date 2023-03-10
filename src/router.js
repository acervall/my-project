import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import DeparturesView from './views/DeparturesView.vue'
import ProfileView from './views/ProfileView.vue'
import WelcomeView from './views/WelcomeView.vue'
import FunktionerView from './views/FunktionerView.vue'
import ClearAll from './components/ClearAll.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: WelcomeView,
      path: '/'
    },
    {
      component: HomeView,
      path: '/home'
    },
    {
      component: DeparturesView,
      path: '/departures/:id'
    },
    {
      component: ProfileView,
      path: '/profile'
    },
    {
      component: FunktionerView,
      path: '/funktioner'
    },
    {
      component: ClearAll,
      path: '/clear'
    }
  ]
})
