import { createApp } from 'vue'
import AboutApp from './AboutApp.vue'
import { installAnalyticsTracking } from './analytics'
import './styles.css'
import './about.css'

installAnalyticsTracking()
createApp(AboutApp).mount('#app')
