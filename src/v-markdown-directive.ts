import { marked } from 'marked'
import type { App } from 'vue'
import * as DOMPurify from 'dompurify'

const install = (
  app: App,
  config: { markedOptions: marked.MarkedOptions; domPurifyOptions: DOMPurify.Config } = {
    markedOptions: { mangle: false, headerIds: false },
    domPurifyOptions: {}
  }
) => {
  app.directive('markdown', (el, binding) => {
    marked.use(config.markedOptions)
    const convertedMD = marked.parse(binding.value)
    const rendered_html = DOMPurify.sanitize(convertedMD)
    console.log(rendered_html)
    rendered_html && (el.innerHTML = rendered_html)
  })
}

export default install
