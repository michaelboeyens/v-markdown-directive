import { marked } from 'marked'
import type { App } from 'vue'
import * as DOMPurify from 'isomorphic-dompurify'

const install = (
  app: App,
  config: { markedOptions: marked.MarkedOptions; domPurifyOptions: DOMPurify.Config } = {
    markedOptions: { mangle: false, headerIds: false },
    domPurifyOptions: {}
  }
) => {
  app.directive('markdown', {
    beforeMount(el, binding) {
      marked.use(config.markedOptions)
      const rendered_html = DOMPurify.sanitize(marked.parse(binding.value))
      console.log(rendered_html)
      rendered_html && (el.innerHTML = rendered_html)
    }
  })
}

export default install
