import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout.vue";
import AdminLayout from "../layouts/AdminLayout/AdminLayout.vue";

// ADMIN
import CRUD_Book from "../views/admin/ManagerBook/CRUD/CRUD_Book.vue";
import HomeAdmin from "../views/admin/Home/Home.vue";
import Dashboard from "../views/admin/Dashboard/Dashboard.vue";

// !ADMIN
import Home from "../views/resources/Home/Home.vue";

const routes = [
  // ADMIN
  {
    path: "/admin-home",
    component: HomeAdmin,
    meta: {
      layout: AdminLayout,
    },
  },
  {
    path: "/admin-dashboard",
    component: Dashboard,
    meta: {
      layout: AdminLayout,
    },
  },
  {
    path: "/admin-managerBook",
    component: CRUD_Book,
    meta: {
      layout: AdminLayout,
    },
  },
  // !ADMIN
  {
    path: "/",
    component: Home,
    meta: {
      layout: DefaultLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
