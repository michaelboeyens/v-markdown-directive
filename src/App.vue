<template>
  <main v-markdown="markdown"></main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const markdown = ref(`# Hello World
This is a markdown file.
## Subtitle
This is a subtitle.
### Subsubtitle
This is a subsubtitle.
- List item 1
- List item 2
- List item 3`)
</script>
