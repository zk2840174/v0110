// Composables
import { createRouter, createWebHistory } from 'vue-router'
import VueCookies from "vue-cookies";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: "/m1",
    name: "M1Page",
    component:() =>  import(/* webpackChunkName: "home" */ '@/views/M1Page.vue'),

  },
  {
    path: "/m2",
    name: "M2Page",
    component:() =>  import(/* webpackChunkName: "home" */ '@/views/M2Page.vue'),
  },
  {
    path: "/m3",
    name: "M3Page",
    component:() =>  import(/* webpackChunkName: "home" */ '@/views/M3Page.vue'),
  },
  {
    path: "/m4",
    name: "M4Page",
    component:() =>  import(/* webpackChunkName: "home" */ '@/views/M4Page.vue'),
    meta: {requireAuth: true}
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {

  if(to.meta.requireAuth) {

    if(!VueCookies.get("loginCookie")) {

      return "/m2"
    }


  }

})

export default router
