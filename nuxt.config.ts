// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@roshan-ui/nuxt'],
  css: ['~/assets/styles/index.css'],
  srcDir: 'src/',
  components: {
    dirs: [{ path: '~/components/global', global: true }],
  },

  // module options
  roshan: {
    utilityClass: true,
  },
})
