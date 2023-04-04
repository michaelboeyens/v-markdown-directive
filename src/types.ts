import type VMarkdown from './v-markdown-directive'
export * from './v-markdown-directive'

declare module 'vue' {
  interface GlobalDirectives {
    markdown: typeof VMarkdown
  }
}
