import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore, useAlertStore } from "@/stores";
import accountRoutes from "./account.routes";
import usersRoutes from "./users.routes";
import modulesRoutes from "./modules.routes";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    { ...accountRoutes },
    { ...usersRoutes },
    { ...modulesRoutes },
    // catch all redirect to home page
    { path: "/:pathMatch(.*)*", name: "redirectModules", redirect: "/modules" },
  ],
});

router.beforeEach(async (to) => {
  // clear alert on route change
  const alertStore = useAlertStore();
  alertStore.clear();

  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/account/login", "/account/register"];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();
  // возможно, нужно const { user } = storeToRefs(authStore); реализовать
  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath;
    return "/account/login";
  }
});
