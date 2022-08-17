import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/media/meer/MEER2/CODE/Projects/SDS/web/Dashboard/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}