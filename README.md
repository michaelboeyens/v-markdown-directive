# v-markdown-directive

> Markdown parser for Vue.js
[![Security audit](https://github.com/michaelboeyens/v-markdown-directive/actions/workflows/audit.yml/badge.svg)](https://github.com/michaelboeyens/v-markdown-directive/actions/workflows/audit.yml)

## Install

```js
import markdown from 'v-markdown-directive'

const app = createApp(App)

app.use(markdown)

app.mount('#app')
```

## usage

```
<template>
  <div v-markdown="markdown" />
</template>

<script setup>
import { ref } from 'vue'

const markdown = ref('# Hello World')
</script>
```
