import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

function policyRouteFallback() {
  return {
    name: 'policy-route-fallback',
    configureServer(server) {
      server.middlewares.use((request, _response, next) => {
        if (request.method === 'GET' && /^\/policies\/(housing|family|bike|road)\/?(?:\?.*)?$/.test(request.url || '')) {
          request.url = '/policy.html'
        }
        next()
      })
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [policyRouteFallback(), vue()],
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        policy: fileURLToPath(new URL('./policy.html', import.meta.url)),
        gallery: fileURLToPath(new URL('./gallery.html', import.meta.url)),
      },
    },
  },
})
