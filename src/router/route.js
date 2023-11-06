import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout.vue";
import AdminLayout from "../layouts/AdminLayout/AdminLayout.vue";

// ADMIN
import CRUD_Book from "../views/admin/ManagerBook/CRUD/CRUD_Book.vue";
import HomeAdmin from "../views/admin/Home/Home.vue";
import Dashboard from "../views/admin/Dashboard/Dashboard.vue";

// !ADMIN
import Home from "../views/resources/Home/Home.vue";
import Book from "../views/resources/Book/Book.vue";
import Contact from "../views/resources/Contact/Contact.vue";
import BookDetail from "../views/resources/BookDetail/BookDetail.vue";
import Login from "../views/resources/Login/Login.vue";
import Register from "../views/resources/Register/Register.vue";
import Company from "../views/resources/Company/Company.vue";

import Cart from "../views/customer/Cart/Cart.vue";
import Profile from "../views/customer/Profile/Profile.vue";
import History from "../views/customer/History/History.vue";

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
  // !ADMIN =====================================================================
  {
    path: "/register",
    component: Register,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/company",
    component: Company,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/lienhe",
    component: Contact,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/history",
    component: History,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/order",
    component: Cart,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/books/:id",
    component: BookDetail,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/books",
    component: Book,
    meta: {
      layout: DefaultLayout,
    },
  },
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
