import type { RouterConfig } from '@nuxt/schema'
import AppLayout from '@/layouts/AppLayout.vue'

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '/master',
                name: 'master',
                component: () => import('~/pages/Master.vue')
            },
            {
              path: '/dashboard',
              name: 'dashboard',
              component: () => import('~/pages/Dashboard.vue')
          }
        ]
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('~/pages/Landing.vue')
    }
],
} satisfies RouterConfig
