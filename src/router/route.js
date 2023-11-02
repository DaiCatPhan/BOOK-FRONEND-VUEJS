import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/resources/Home/Home.vue";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    meta: {
      layout: DefaultLayout,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
