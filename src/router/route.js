import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout.vue";
import AdminLayout from "../layouts/AdminLayout/AdminLayout.vue";

// ADMIN
import CRUD_Book from "../views/admin/ManagerBook/CRUD/CRUD_Book.vue";
import CRUD_Customer from "../views/admin/ManagerCustomer/CRUD/CRUD_Customer.vue";
import CRUD_Booking from "../views/admin/ManagerBooking/CRUD/CRUD_Booking.vue";
import Revenue from "../views/admin/ManagerRevenue/Revenue.vue";
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

import NotFound from "../views/resources/NotFound/NotFound.vue";

const routes = [
  // ADMIN =======================================================
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
  {
    path: "/admin-managerBooking",
    component: CRUD_Booking,
    meta: {
      layout: AdminLayout,
    },
  },
  {
    path: "/admin-managerCustomer",
    component: CRUD_Customer,
    meta: {
      layout: AdminLayout,
    },
  },
  {
    path: "/admin-revenue",
    component: Revenue,
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
  {
    path: "/:slug",
    component: NotFound,
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
