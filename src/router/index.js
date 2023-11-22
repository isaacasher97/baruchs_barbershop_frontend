import { createRouter, createWebHistory } from "vue-router";
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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/faqs",
    name: "faqs",
    component: () =>
      import(/* webpackChunkName: "faqs" */ "../views/FaqsView.vue"),
  },
  {
    path: "/contactus",
    name: "contactus",
    component: () =>
      import(/* webpackChunkName: "contactus" */ "../views/ContactUsView.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () =>
      import(/* webpackChunkName: "services" */ "../views/ServicesView.vue"),
  },
  {
    path: "/testimonials",
    name: "testimonials",
    component: () =>
      import(
        /* webpackChunkName: "testimonials" */ "../views/TestimonialsView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
