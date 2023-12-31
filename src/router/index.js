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
  {
    path: "/featuredcontent",
    name: "featuredcontent",
    component: () =>
      import(
        /* webpackChunkName: "featuredcontent" */ "../views/FeaturedContentView.vue"
      ),
  },
  {
    path: "/services/catering",
    name: "catering",
    component: () =>
      import(/* webpackChunkName: "catering" */ "../views/CateringView.vue"),
  },
  {
    path: "/services/photo-video",
    name: "photovideo",
    component: () =>
      import(
        /* webpackChunkName: "photovideo" */ "../views/PhotoVideoView.vue"
      ),
  },
  {
    path: "/services/lighting-decor",
    name: "lightingdecor",
    component: () =>
      import(
        /* webpackChunkName: "lightingdecor" */ "../views/LightingEventView.vue"
      ),
  },
  {
    path: "/services/special-effects",
    name: "specialeffects",
    component: () =>
      import(
        /* webpackChunkName: "specialeffects" */ "../views/SpecialEffectsView.vue"
      ),
  },
  {
    path: "/services/live-music-orchestra",
    name: "livemusic",
    component: () =>
      import(/* webpackChunkName: "livemusic" */ "../views/LiveMusicView.vue"),
  },
  {
    path: "/services/djs-entertainers",
    name: "djsentertainers",
    component: () =>
      import(/* webpackChunkName: "djsentertainersc" */ "../views/DjsView.vue"),
  },
  {
    path: "/services/chazzan-singers",
    name: "chazzansingers",
    component: () =>
      import(
        /* webpackChunkName: "chazzansingers" */ "../views/ChazzanView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
