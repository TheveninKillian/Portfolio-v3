import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

import en from '../locales/en.yml'
import fr from '../locales/fr.yml'

import './assets/sass/main.scss'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'

import AOS from 'aos'
import 'aos/dist/aos.css'

const aos = AOS.init({
  duration: 1000,
  once: true
})

const i18n = createI18n({
  locale: 'fr',
  messages: {
    en,
    fr
  }
})

createApp(App).use(i18n).use(aos).mount('#app')
