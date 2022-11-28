export function registerGlobalComponent(app) {
  app.component("auth-layout", () => import("@/layout/AuthLayout.vue"));
  app.component("default-layout", () => import("@/layout/DefaultLayout.vue"));
  app.component("admin-layout", () => import("@/layout/AdminLayout.vue"));
}
