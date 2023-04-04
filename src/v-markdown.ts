import type { Plugin } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

const install: Plugin<{ markedOptions: marked.MarkedOptions; domPurifyOptions: DOMPurify.Config }> =
  {
    install: (app, { markedOptions = {}, domPurifyOptions = {} }) => {
      app.directive('markdown', (el, binding) => {
        const rendered_html = DOMPurify.sanitize(
          marked(binding.value, markedOptions),
          domPurifyOptions
        )
        rendered_html && (el.innerHTML = rendered_html)
      })
    }
  }

export default install
