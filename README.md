# v-markdown-directive

[![Security audit](https://github.com/michaelboeyens/v-markdown-directive/actions/workflows/audit.yml/badge.svg)](https://github.com/michaelboeyens/v-markdown-directive/actions/workflows/audit.yml)
<br />
[![Tests status](https://github.com/michaelboeyens/v-markdown-directive/actions/workflows/test.yml/badge.svg)](https://github.com/michaelboeyens/v-markdown-directive/actions/workflows/test.yml)
<br />

> Markdown parser for Vue.js

## Install

```js
import markdown from 'v-markdown-directive'

const app = createApp(App)

app.use(markdown)

app.mount('#app')
```

## Usage

```
<template>
  <div v-markdown="markdown" />
</template>

<script setup>
import { ref } from 'vue'

const markdown = ref('# Hello World')
</script>
```
