import { createApp } from 'vue'
import App from './App.vue'
import { installAnalyticsTracking } from './analytics'
import './styles.css'

installAnalyticsTracking()
createApp(App).mount('#app')
