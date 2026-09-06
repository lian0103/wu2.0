import { readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

// Render the same Vue components used by visitors, without starting an HTTP server.
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' })
try {
  for (const [html, component] of [['index.html', '/src/App.vue'], ['gallery.html', '/src/GalleryApp.vue']]) {
    const { default: App } = await server.ssrLoadModule(component)
    const markup = await renderToString(createSSRApp(App))
    const path = `dist/${html}`
    const source = await readFile(path, 'utf8')
    // SSR imports use development asset URLs; map them to Vite's emitted assets.
    const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'))
    let rendered = markup
    for (const [key, asset] of Object.entries(manifest)) {
      if (!key.startsWith('src/assets/')) continue
      rendered = rendered.replaceAll(`/${key}`, `/${asset.file}`)
        .replaceAll(`/${encodeURI(key)}`, `/${asset.file}`)
    }
    await writeFile(path, source.replace('<div id="app"></div>', `<div id="app">${rendered}</div>`))
    console.log(`Prerendered ${html}`)
  }
} finally {
  await server.close()
}
