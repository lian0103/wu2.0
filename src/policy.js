import { createApp } from 'vue'
import PolicyApp from './PolicyApp.vue'
import { installAnalyticsTracking } from './analytics'
import './styles.css'
import './policy.css'

const pathSlug = window.location.pathname.match(/\/policies\/([^/]+)\/?$/)?.[1]
const querySlug = new URLSearchParams(window.location.search).get('id')

installAnalyticsTracking()
createApp(PolicyApp, { policySlug: pathSlug || querySlug }).mount('#app')
