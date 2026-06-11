import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Disclaimer from './Disclaimer.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(Disclaimer),
    })
  },
}
