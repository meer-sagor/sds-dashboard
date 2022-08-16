import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/ProfileView.vue"),
    },
    {
      path: "/projects",
      name: "project",
      component: () => import("@/views/ProjectsView/index.vue"),
      children: [
        {
          path: "/add",
          name: "add-project",
          component: () => import("@/views/ProjectsView/add.vue"),
        },
      ],
    },
  ],
});

export default router;
