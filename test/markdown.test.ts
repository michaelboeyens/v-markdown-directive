import { describe, test } from 'vitest'
import { basicTest } from './testUtils'

const template = `<div v-markdown="markdown"></div>`

describe('markdown tests', () => {
  test.each([1, 2, 3, 4, 5, 6])('title %i', (level) => {
    const markdown = `${'#'.repeat(level)} Level ${level}`
    const expected = `<h${level}>Level ${level}</h${level}>`
    basicTest(template, markdown, expected)
  })
  test('bold', () => {
    const markdown = `**bold**`
    const expected = `<p><strong>bold</strong></p>`
    basicTest(template, markdown, expected)
  })
  test('italic', () => {
    const markdown = `*italic*`
    const expected = `<p><em>italic</em></p>`
    basicTest(template, markdown, expected)
  })
  test('bold italic', () => {
    const markdown = `***bold italic***`
    const expected = `<em><strong>bold italic</strong></em>`
    basicTest(template, markdown, expected)
  })
  test('blockquotes', () => {
    const markdown = `> blockquote`
    const expected = `<blockquote>\n<p>blockquote</p>\n</blockquote>`
    basicTest(template, markdown, expected)
  })
  test('ordered lists', () => {
    const markdown = `1. ordered list 1\n2. ordered list 2\n3. ordered list 3`
    const expected = `<ol>\n<li>ordered list 1</li>\n<li>ordered list 2</li>\n<li>ordered list 3</li>\n</ol>`
    basicTest(template, markdown, expected)
  })
  test('unordered lists', () => {
    const markdown = `* unordered list 1\n* unordered list 2\n* unordered list 3`
    const expected = `<ul>\n<li>unordered list 1</li>\n<li>unordered list 2</li>\n<li>unordered list 3</li>\n</ul>`
    basicTest(template, markdown, expected)
  })
  test('code', () => {
    const markdown = `\`\`\`js\nconst a = 1\n\`\`\``
    const expected = `<pre><code class="language-js">const a = 1\n</code></pre>`
    basicTest(template, markdown, expected)
  })
  test('horizontal rules', () => {
    const markdown = `---`
    const expected = `<hr>`
    basicTest(template, markdown, expected)
  })
  test('links', () => {
    const markdown = `[link](https://github.com)`
    const expected = `<a href="https://github.com">link</a>`
    basicTest(template, markdown, expected)
  })
  test('images', () => {
    const markdown = `![image](https://github.com)`
    const expected = `<img alt="image" src="https://github.com">`
    basicTest(template, markdown, expected)
  })
})
