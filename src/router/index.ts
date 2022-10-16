import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore, useAlertStore } from "@/stores";
import { ViewChoiceOfCourses } from "@/views";
import accountRoutes from "./account.routes";
import usersRoutes from "./users.routes";
import coursesRoutes from "./courses.routes";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: ViewChoiceOfCourses,
    },
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
    { ...coursesRoutes },
    // catch all redirect to home page
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

router.beforeEach(async (to) => {
  // clear alert on route change
  const alertStore = useAlertStore();
  alertStore.clear();

  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/account/login", "/account/register", "/account/logic"];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();
  // возможно, нужно const { user } = storeToRefs(authStore); реализовать
  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath;
    return "/account/login";
  }
});
