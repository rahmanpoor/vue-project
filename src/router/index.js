import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: 'صفحه اصلی' }
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { title: 'درباره' }
  },
  {
    path: "/product/1",
    name: "ProductDetailsView",
    component: ProductDetailsView,
    meta: { title: 'جزئیات محصول' }
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
