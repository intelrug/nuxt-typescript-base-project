export default {
  env: {},
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  head: {
    title: 'Nuxt.js TypeScript Base Project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js TypeScript Base Project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  loading: { color: '#3B8070' },
  css: [],
  build: {},
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
  ],
  serverMiddleware: [
    { path: '/api', handler: '~/api/index.ts' },
  ],
  axios: {},
};
