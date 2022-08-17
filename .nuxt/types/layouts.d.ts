import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/media/meer/MEER2/CODE/Projects/SDS/web/Dashboard/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}