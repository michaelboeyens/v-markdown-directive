import { marked } from 'marked'
import * as DOMPurify from 'dompurify'
import type { App } from 'vue'

const install = (
  app: App,
  config: { markedOptions: marked.MarkedOptions; domPurifyOptions: DOMPurify.Config } = {
    markedOptions: { mangle: false, headerIds: false },
    domPurifyOptions: {}
  }
) => {
  app.directive('markdown', (el, binding) => {
    marked.use(config.markedOptions)
    console.log(binding.value)
    const convertedMD = marked.parse(binding.value)
    console.log(convertedMD)
    const rendered_html = DOMPurify.sanitize(convertedMD)
    console.log(rendered_html)
    rendered_html && (el.innerHTML = rendered_html)
  })
}

export default install
