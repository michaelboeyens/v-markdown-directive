import { mount } from '@vue/test-utils';
import { expect, test } from "vitest";
import markdown from "../src/v-markdown-directive";

const markdownComponent = {template: `<div v-markdown="markdown"></div>`, data() {return {markdown: `# Hello World`}}}

test("render markdown", ()=>{
    const wrapper = mount(markdownComponent, {
        global:{
        plugins: [markdown]
        }
    })
    expect(wrapper.html()).toContain(`<h1>Hello World</h1>`)
})