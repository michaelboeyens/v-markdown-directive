import { marked } from 'marked'
import type { App } from 'vue'
import DOMPurify from 'dompurify'

/**
 * Installs the `markdown` directive to the provided Vue.js `app` instance.
 * @param app - The Vue.js `app` instance to install the directive to.
 * @param config - The configuration options for the `markdown` directive.
 * @param config.markedOptions - The options to pass to the `marked` library.
 * @param config.domPurifyOptions - The options to pass to the `DOMPurify` library.
 */
const install = (
  app: App,
  config: { markedOptions: marked.MarkedOptions; domPurifyOptions: DOMPurify.Config } = {
    markedOptions: { mangle: false, headerIds: false },
    domPurifyOptions: {}
  }
) => {
  app.directive('markdown', {
    mounted(el, binding) {
      marked.use(config.markedOptions)
      const rendered_html = DOMPurify.sanitize(marked.parse(binding.value), config.domPurifyOptions)
      rendered_html && (el.innerHTML = rendered_html)
    }
  })
}

export default install
