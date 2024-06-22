import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Favourites from "../views/Favourites.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/favourites", component: Favourites },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
