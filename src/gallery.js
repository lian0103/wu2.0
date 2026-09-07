import { createApp } from 'vue'
import GalleryApp from './GalleryApp.vue'
import { installAnalyticsTracking } from './analytics'
import './styles.css'
import './gallery.css'

installAnalyticsTracking()
createApp(GalleryApp).mount('#app')
