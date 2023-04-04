import { marked } from 'marked'
import DOMPurify from 'dompurify'
import type { App } from 'vue'

const install = (
  app: App,
  config: { markedOptions: marked.MarkedOptions; domPurifyOptions: DOMPurify.Config }
) => {
  app.directive('markdown', (el, binding) => {
    const rendered_html = DOMPurify.sanitize(
      marked(binding.value, config.markedOptions ?? {}),
      config.domPurifyOptions ?? {}
    )
    rendered_html && (el.innerHTML = rendered_html)
  })
}

export default install
