// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@roshan-labs/ui'],
  css: ['~/assets/styles/index.css'],
  srcDir: 'src/',
  components: {
    dirs: [{ path: '~/components/global', global: true }],
  },
  ui: { windicss: true },
})
