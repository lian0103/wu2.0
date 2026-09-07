import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { policies } from '../src/policies.js'

const siteUrl = 'https://wuyalun.org'
const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'))

function resolveAssetUrls(markup) {
  let rendered = markup
  for (const [key, asset] of Object.entries(manifest)) {
    if (!key.startsWith('src/assets/')) continue
    rendered = rendered.replaceAll(`/${key}`, `/${asset.file}`)
      .replaceAll(`/${encodeURI(key)}`, `/${asset.file}`)
  }
  return rendered
}

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function setMetaContent(source, attribute, name, content) {
  const pattern = new RegExp(`<meta\\s+${attribute}="${name}"\\s+content="[^"]*"\\s*/?>`)
  const tag = `<meta ${attribute}="${name}" content="${escapeAttribute(content)}" />`
  return pattern.test(source) ? source.replace(pattern, tag) : source.replace('</head>', `    ${tag}\n  </head>`)
}

function setCanonical(source, url) {
  const tag = `<link rel="canonical" href="${escapeAttribute(url)}" />`
  const pattern = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/
  return pattern.test(source) ? source.replace(pattern, tag) : source.replace('</head>', `    ${tag}\n  </head>`)
}

function setPolicyMetadata(source, policy) {
  const title = `${policy.short}｜${policy.title.replace('\n', '・')}｜吳亞倫官網`
  const description = `新北市議員參選人吳亞倫的${policy.short}政見。${policy.description}`
  const url = `${siteUrl}/policies/${policy.slug}/`
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    inLanguage: 'zh-Hant',
    about: { '@id': `${siteUrl}/#person` },
    isPartOf: { '@id': `${siteUrl}/#website` },
  })

  let output = source.replace(/<title>.*?<\/title>/, `<title>${escapeAttribute(title)}</title>`)
  output = setMetaContent(output, 'name', 'description', description)
  output = setMetaContent(output, 'property', 'og:title', title)
  output = setMetaContent(output, 'property', 'og:description', description)
  output = setMetaContent(output, 'property', 'og:url', url)
  output = setCanonical(output, url)
  return output.replace('</head>', `    <script type="application/ld+json">${structuredData}</script>\n  </head>`)
}

async function renderComponent(server, componentPath, props = {}) {
  const { default: App } = await server.ssrLoadModule(componentPath)
  const markup = await renderToString(createSSRApp(App, props))
  return resolveAssetUrls(markup)
}

async function writeRenderedPage({ server, sourcePath, outputPath = sourcePath, componentPath, props, transform = (value) => value }) {
  const source = await readFile(`dist/${sourcePath}`, 'utf8')
  const markup = await renderComponent(server, componentPath, props)
  const output = transform(source).replace('<div id="app"></div>', `<div id="app">${markup}</div>`)
  const destination = `dist/${outputPath}`
  await mkdir(destination.slice(0, destination.lastIndexOf('/')), { recursive: true })
  await writeFile(destination, output)
  console.log(`Prerendered ${outputPath}`)
}

// Render the same Vue components used by visitors, without starting an HTTP server.
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' })
try {
  await writeRenderedPage({ server, sourcePath: 'index.html', componentPath: '/src/App.vue' })
  await writeRenderedPage({ server, sourcePath: 'gallery.html', componentPath: '/src/GalleryApp.vue' })

  for (const policy of policies) {
    await writeRenderedPage({
      server,
      sourcePath: 'policy.html',
      outputPath: `policies/${policy.slug}/index.html`,
      componentPath: '/src/PolicyApp.vue',
      props: { policySlug: policy.slug },
      transform: (source) => setPolicyMetadata(source, policy),
    })
  }
} finally {
  await server.close()
}
