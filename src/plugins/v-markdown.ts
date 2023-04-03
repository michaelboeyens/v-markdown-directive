import type { Plugin } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

const install: Plugin = {
  install: (app, options) => {
    app.directive('markdown', (el, binding, vnode) => {
      const rendered_html = DOMPurify.sanitize(marked(binding.value))
      rendered_html && (el.innerHTML = rendered_html)
    })
  }
}

export default install
