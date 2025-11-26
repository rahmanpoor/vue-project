import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
      meta: { title: 'مدیریت محصولات' }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 👇 این بخش باید دقیقاً بعد از ساخت router باشد
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Vue App';
  next();
});

export default router;
