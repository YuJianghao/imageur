import { createRouter, createWebHashHistory } from 'vue-router'
import { isSignedIn } from './api/auth'
import routes from '~pages'
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  if (isSignedIn()) {
    if (to.path === '/signin')
      return '/'
    else return true
  }
  else {
    if (to.path !== '/signin')
      return '/signin'
    return true
  }
})
