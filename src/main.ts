import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowDown,
  faCheck,
  faLightbulb,
  faLink,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons'

library.add(faArrowDown)
library.add(faCheck)
library.add(faLightbulb)
library.add(faLink)
library.add(faFolderOpen)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
