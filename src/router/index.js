import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import CorView from "../views/CorView.vue";
import AcessorioView from "../views/AcessorioView.vue";
import MarcaView from "../views/MarcaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
    },
    {
      path: "/cores",
      name: "cores",
      component: CorView,
    },
    {
      path: "/acessorios",
      name: "acessorios",
      component: AcessorioView,
    },
    {
      path: "/marcas",
      name: "marcas",
      component: MarcaView,
    },
  ],
});

export default router;
