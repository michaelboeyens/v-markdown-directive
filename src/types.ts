import type VMarkdown from './v-markdown'
export * from './v-markdown'

declare module 'vue' {
  interface GlobalDirectives {
    markdown: typeof VMarkdown
  }
}
